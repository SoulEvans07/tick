import type { MessageMapper } from '~/types/message-mapper';
import type { Emoji } from '~/types/emoji';

export type MTextBlock = { t: string };
export type MEmojiBlock = { e: string };

export class MockMessageMapper
  implements MessageMapper<MTextBlock, MEmojiBlock>
{
  text(content: string): MTextBlock {
    return { t: content };
  }

  emoji(emoji: Emoji): MEmojiBlock {
    return { e: emoji.name };
  }
}
