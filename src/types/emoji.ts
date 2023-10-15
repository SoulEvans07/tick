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
  multiSkinTone: z.literal(true),
});

export const Emoji = z.union([
  MultiSkintoneEmoji,
  EmojiWithSkinVariations,
  SimpleEmoji,
]);

export const EmojiMap = z.record(Emoji).superRefine((input, ctx) => {
  const entries = Object.entries(input);

  for (const [key, emoji] of entries) {
    if (emoji.name !== key) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: `emoji key ${key} does not match name ${emoji.name}`,
        path: [key, 'name'],
      });
    }

    if ('skinVariations' in emoji) {
      const variants = Object.entries(emoji.skinVariations);
      for (const [skinKey, skinVariant] of variants) {
        if (skinVariant.name !== `${emoji.name}#skin-tone-${skinKey}`) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: `skin variant's key ${emoji.name}#skin-tone-${skinKey} does not match name ${skinVariant.name}`,
            path: [key, 'skinVariations', skinKey, 'name'],
          });
        }
      }
    }
  }
});

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
