import emojiMap from './emoji-map.json';
import { EmojiMap, EmojiWithSkinVariations } from '~/types/emoji';

export const emojis = EmojiMap.parse(emojiMap);

const hand = EmojiWithSkinVariations.parse(emojiMap.hand);

export const skinTones = [
  { ...hand, value: null },
  ...Object.entries(hand.skinVariations).map(([tone, emoji]) => ({
    ...emoji,
    value: tone,
  })),
];
