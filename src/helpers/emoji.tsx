import Image from 'next/legacy/image';

import { emojis } from '~/assets/emoji';
import type { Emoji, EmojiMap } from '~/types/emoji';
import type { MessageMapper } from '~/types/message-mapper';

// P4: prepare to handle unicode emoji chars
export class EmojiInterpolator<TextBlock, EmojiBlock> {
  constructor(
    private emojis: EmojiMap,
    private mapper: MessageMapper<TextBlock, EmojiBlock>
  ) {}

  parse(input: string): (TextBlock | EmojiBlock)[] {
    if (input.length === 0) return [this.mapper.text('', 'empty')];

    const bloks: (TextBlock | EmojiBlock)[] = [];

    let parts = input
      .split(':')
      .flatMap((o, i, a) => (a.length - 1 === i ? [o] : [o, ':']))
      .filter(Boolean);

    let acc: string[] = [];
    let i = 0;
    while (parts.length > 0) {
      i++;
      const [before, middle, after, ...rest] = parts;
      if (!before || !middle || !after) {
        const content = acc.length
          ? [...acc, ...parts].join('')
          : parts.join('');
        bloks.push(this.mapper.text(content, `text-${i}-${content}`));
        parts = [];
        continue;
      }

      if (before === ':' && after === ':') {
        const emoji = this.getEmoji(middle);
        if (emoji) {
          if (acc.length) {
            bloks.push(this.mapper.text(acc.join(''), `before-${i}`));
            acc = [];
          }

          bloks.push(this.mapper.emoji(emoji, `emoji-${i}-${emoji.name}`));
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

class ReactMessageMapper implements MessageMapper<JSX.Element, JSX.Element> {
  text(content: string, key: string) {
    return (
      <span className="whitespace-pre-wrap" key={key}>
        {content}
      </span>
    );
  }

  emoji(emoji: Emoji, key: string) {
    return (
      <div className="inline-flex h-5 w-5" key={key}>
        <Image
          src={`/emojis/${emoji.unicode}.png`}
          width={44}
          height={44}
          alt={emoji.name}
          title={emoji.name}
        />
      </div>
    );
  }
}

export const emojiInterpolator = new EmojiInterpolator(
  emojis,
  new ReactMessageMapper()
);
