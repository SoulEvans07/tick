import type { Emoji } from '~/types/emoji';

export interface MessageMapper<TextBlock, EmojiBlock> {
  text(content: string, key: string | number): TextBlock;
  emoji(emoji: Emoji, key: string | number): EmojiBlock;
}
