/* eslint-disable prettier/prettier */
import { z } from 'zod';
import type { EmojiGroupKey } from '~/types/emoji-group';

import smileys from './smileys.json';
import nature from './nature.json';
import food from './food.json';
import travel from './travel.json';
import activities from './activities.json';
import objects from './objects.json';
import symbols from './symbols.json';
import flags from './flags.json';

export const EmojiGroups: Record<EmojiGroupKey, { title: string; list: string[] }> = {
  smileys: { title: 'Smileys & People', list: z.array(z.string()).parse(smileys) },
  nature: { title: 'Animals & Nature', list: z.array(z.string()).parse(nature) },
  food: { title: 'Food & Drink', list: z.array(z.string()).parse(food) },
  travel: { title: 'Travel & Places', list: z.array(z.string()).parse(travel) },
  activities: { title: 'Activities', list: z.array(z.string()).parse(activities) },
  objects: { title: 'Objects', list: z.array(z.string()).parse(objects) },
  symbols: { title: 'Symbols', list: z.array(z.string()).parse(symbols) },
  flags: { title: 'Flags', list: z.array(z.string()).parse(flags) },
};

export const AllEmojiGroups = Object.values(EmojiGroups);