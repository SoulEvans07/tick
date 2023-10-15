import Image from 'next/legacy/image';
import { z } from 'zod';

import emojiMap from '~/assets/emoji-map.json';
import { Emoji, EmojiMap, EmojiTag } from '~/types/emoji';

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

export type TextBlock = { t: string };
export type EmojiBlock = { e: string };
export type MessageBlock = TextBlock | EmojiBlock;

// P4: prepare to handle unicode emoji chars
export class EmojiInterpolator {
  constructor(private emojis: EmojiMap) {}

  parse(input: string): MessageBlock[] {
    if (input.length === 0) return [{ t: '' }];

    const bloks: MessageBlock[] = [];

    let parts = input
      .split(':')
      .flatMap((o, i, a) => (a.length - 1 === i ? [o] : [o, ':']))
      .filter(Boolean);

    // console.log(parts);
    let acc: string[] = [];
    while (parts.length > 0) {
      const [before, middle, after, ...rest] = parts;
      if (!before || !middle || !after) {
        if (acc.length) bloks.push({ t: [...acc, ...parts].join('') });
        else bloks.push({ t: parts.join('') });
        parts = [];
        continue;
      }

      if (before === ':' && after === ':') {
        // check if emoji exists with middle
        const emoji = this.getEmoji(middle);
        if (emoji) {
          if (acc.length) {
            bloks.push({ t: acc.join('') });
            acc = [];
          }

          bloks.push({ e: emoji.name });
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

export const emojiInterpolator = new EmojiInterpolator(emojis);
