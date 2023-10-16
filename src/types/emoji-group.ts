import { z } from 'zod';

export const EmojiGroupKey = z.union([
  z.literal('smileys'),
  z.literal('nature'),
  z.literal('food'),
  z.literal('travel'),
  z.literal('activities'),
  z.literal('objects'),
  z.literal('symbols'),
  z.literal('flags'),
]);

export type EmojiGroupKey = z.infer<typeof EmojiGroupKey>;
