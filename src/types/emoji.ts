import { z } from 'zod';

export const SimpleEmoji = z.object({
  _type: z.literal('simple').default('simple'),
  name: z.string(),
  unicode: z.string(),
});

export const EmojiWithSkinVariations = SimpleEmoji.extend({
  _type: z.literal('withSkin').default('withSkin'),
  skinVariations: z.record(SimpleEmoji),
});

export const MultiSkintoneEmoji = EmojiWithSkinVariations.extend({
  _type: z.literal('multiSkin').default('multiSkin'),
  multiSkinTone: z.boolean().optional(),
});

export const Emoji = z.union([
  SimpleEmoji,
  EmojiWithSkinVariations,
  MultiSkintoneEmoji,
]);

export const EmojiMap = z.record(Emoji);

export type SimpleEmoji = z.infer<typeof SimpleEmoji>;
export type EmojiWithSkinVariations = z.infer<typeof EmojiWithSkinVariations>;
export type MultiSkintoneEmoji = z.infer<typeof MultiSkintoneEmoji>;

export type Emoji = z.infer<typeof Emoji>;
export type EmojiMap = z.infer<typeof EmojiMap>;

export const EmojiTag = z
  .string()
  .min(3)
  .max(128)
  .refine((val) => val.startsWith(':') && val.endsWith(':'), {
    message: 'Invalid emoji format',
  });

export const EmojiSymbol = z.string().emoji().length(1);
