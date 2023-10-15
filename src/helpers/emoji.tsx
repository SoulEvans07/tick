import Image from 'next/legacy/image';

import emojiMap from '~/assets/emoji-map.json';
import { type Emoji, EmojiMap, EmojiTag } from '~/types/emoji';
import type { MessageMapper } from '~/types/message-mapper';

const emojis = EmojiMap.parse(emojiMap);

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

// P0: write test
// P1: refactor
export function emojiInterpolation(
  content: string
): JSX.Element | JSX.Element[] {
  const elements: JSX.Element[] = [];

  let parts = content
    .split(':')
    .flatMap((o, i, a) => (a.length - 1 === i ? [o] : [o, ':']))
    .filter(Boolean);

  let acc: string[] = [];
  let i = 0;
  while (parts.length > 0) {
    i++;
    const [before, middle, after, ...rest] = parts;
    if (!before || !middle || !after) {
      const text = parts.join('');
      elements.push(
        <span className="whitespace-pre-wrap" key={text}>
          {text}
        </span>
      );
      parts = [];
      continue;
    }

    const tag = [before, middle, after].join('');

    if (tag.startsWith(':') && tag.endsWith(':')) {
      const emoji = parseEmojiTag(tag);
      if (emoji) {
        if (acc.length) {
          const text = acc.join('');
          acc = [];
          elements.push(
            <span className="whitespace-pre-wrap" key={text}>
              {text}
            </span>
          );
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
        parts = rest;
        continue;
      } else {
        acc = [...acc, before, middle];
        parts = [after, ...rest];
        continue;
      }
    } else {
      acc = [...acc, before];
      parts = [middle, after, ...rest];
      continue;
    }
  }

  return elements;
}

// P4: prepare to handle unicode emoji chars
export class EmojiInterpolator<TextBlock, EmojiBlock> {
  constructor(
    private emojis: EmojiMap,
    private mapper: MessageMapper<TextBlock, EmojiBlock>
  ) {}

  parse(input: string): (TextBlock | EmojiBlock)[] {
    if (input.length === 0) return [this.mapper.text('')];

    const bloks: (TextBlock | EmojiBlock)[] = [];

    let parts = input
      .split(':')
      .flatMap((o, i, a) => (a.length - 1 === i ? [o] : [o, ':']))
      .filter(Boolean);

    let acc: string[] = [];
    while (parts.length > 0) {
      const [before, middle, after, ...rest] = parts;
      if (!before || !middle || !after) {
        if (acc.length) {
          bloks.push(this.mapper.text([...acc, ...parts].join('')));
        } else {
          bloks.push(this.mapper.text(parts.join('')));
        }
        parts = [];
        continue;
      }

      if (before === ':' && after === ':') {
        const emoji = this.getEmoji(middle);
        if (emoji) {
          if (acc.length) {
            bloks.push(this.mapper.text(acc.join('')));
            acc = [];
          }

          bloks.push(this.mapper.emoji(emoji));
          parts = rest;
          continue;
        } else {
          acc.push(before, middle);
          parts = [after, ...rest];
          continue;
        }
      } else {
        acc.push(before);
        parts = [middle, after, ...rest];
        continue;
      }
    }

    return bloks;
  }

  getEmoji(tag: string) {
    const [name, skintone] = tag.split('#skin-tone-');
    if (!name) throw new Error('Parsing error');

    const emoji = this.emojis[name];
    if (!emoji) return undefined;

    if (skintone && 'skinVariations' in emoji) {
      const variant = emoji.skinVariations[skintone];
      if (!variant) return undefined;
      return variant;
    }

    return emoji;
  }
}

export const emojiInterpolator = new EmojiInterpolator(emojis, {
  text: (content) => content,
  emoji: (emoji) => emoji,
});
