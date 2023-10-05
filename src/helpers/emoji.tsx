import Image from 'next/legacy/image';
import { z } from 'zod';
import { emojis } from '~/assets/emojis';

export const EmojiTag = z
  .string()
  .min(3)
  .max(128)
  .refine((val) => val.startsWith(':') && val.endsWith(':'), {
    message: 'Invalid emoji format',
  });

export const EmojiSymbol = z.string().emoji().length(1);

export const Emoji = z.union([EmojiTag, EmojiSymbol]);

const regexpBase = `:(.*):`;
export const emojiRegExpGlobal = new RegExp(regexpBase, 'g');

export function parseEmojiTag(tag: string) {
  const result = EmojiTag.safeParse(tag);
  if (!result.success) return undefined;

  const [name, skintone] = result.data.slice(1, -1).split('#skin-tone-');
  if (!name) throw new Error('Parsing error');

  const emoji = emojis[name];
  if (!emoji) return undefined;

  if (skintone && 'skinVariations' in emoji) {
    const variant = emoji.skinVariations[skintone];
    if (!variant) return undefined;
    return variant;
  }

  return emoji;
}

export function replaceEmojis(content: string): JSX.Element | JSX.Element[] {
  const elements: JSX.Element[] = [];

  const parts = content
    .split(':')
    .flatMap((o, i, a) => (a.length - 1 === i ? [o] : [o, ':']))
    .filter(Boolean);

  let acc: string[] = [];
  for (let i = 0; i < parts.length - 2; i += 0) {
    const [before, curr, after] = [parts[i], parts[i + 1], parts[i + 2]];
    if (!before || !curr || !after) throw new Error('Index out of bounds');
    const tag = [before, curr, after].join('');

    if (tag.startsWith(':') && tag.endsWith(':')) {
      const emoji = parseEmojiTag(tag);
      console.log(tag, '|', emoji, '|', content);
      if (emoji) {
        if (acc.length) {
          const text = acc.join('');
          elements.push(
            <span className="whitespace-pre-wrap" key={text}>
              {text}
            </span>
          );
          acc = [];
        }

        elements.push(
          <div className="inline-flex h-5 w-5" key={`${i}-${emoji.name}`}>
            <Image
              src={`/emojis/${emoji.unicode}.png`}
              width={44}
              height={44}
              alt={emoji.name}
              title={emoji.name}
              className="ASDF"
            />
          </div>
        );
        i += 3;
      } else {
        acc = [...acc, before, tag];
        i += 2;
      }
    } else {
      acc = [...acc, before];
      i++;
    }
  }
  if (acc.length) {
    const text = acc.join('');
    elements.push(
      <span className="whitespace-pre-wrap" key={text}>
        {text}
      </span>
    );
  }

  return elements;
}
