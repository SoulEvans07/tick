import { z } from 'zod';

export const EmojiTag = z
  .string()
  .min(3)
  .max(128)
  .refine((val) => val.startsWith(':') && val.endsWith(':'), {
    message: 'Invalid emoji format',
  });

export const EmojiSymbol = z.string().emoji().length(1);

export const Emoji = z.union([EmojiTag, EmojiSymbol]);
