import type { MessageMapper } from '~/types/message-mapper';
import type { Emoji } from '~/types/emoji';

export type MTextBlock = { t: string };
export type MEmojiBlock = { e: string };

export class MockMessageMapper
  implements MessageMapper<MTextBlock, MEmojiBlock>
{
  text(content: string, _key: string): MTextBlock {
    return { t: content };
  }

  emoji(emoji: Emoji, _key: string): MEmojiBlock {
    return { e: emoji.name };
  }
}
