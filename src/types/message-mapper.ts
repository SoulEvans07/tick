import type { Emoji } from '~/types/emoji';

export interface MessageMapper<TextBlock, EmojiBlock> {
  text(content: string): TextBlock;
  emoji(emoji: Emoji): EmojiBlock;
}
