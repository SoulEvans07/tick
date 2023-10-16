/* eslint-disable @next/next/no-img-element */
'use client';

import { useState } from 'react';

import * as Popover from '~/components/shadcn/popover';
import { Button } from '~/components/shadcn/button';
import { Toggle } from '~/components/shadcn/toggle';
import { SmileIcon } from '~/assets/icons/smile';
import * as Tabs from '~/components/shadcn/tabs';
import type { EmojiGroupKey } from '~/types/emoji-group';
import type { Emoji } from '~/types/emoji';

import { AllEmojiGroups, EmojiGroups } from '~/assets/emoji/groups';
import { MagnifyingGlassIcon } from '~/assets/icons/magnifying-glass';
import { LeafIcon } from '~/assets/icons/leaf';
import { BurgerIcon } from '~/assets/icons/burger';
import { AirplaneIcon } from '~/assets/icons/airplane';
import { AmericanFootballIcon } from '~/assets/icons/american-football';
import { LightbulbIcon } from '~/assets/icons/lightbulb';
import { PeaceSignIcon } from '~/assets/icons/peace-sign';
import { FlagIcon } from '~/assets/icons/flag';
import { emojis, skinTones } from '~/assets/emoji';

export interface EmojiSelectProps {
  onSelect: (selected: Emoji) => void;
}

export function EmojiSelect(props: EmojiSelectProps) {
  const { onSelect } = props;

  const [currentTone, setSkinTone] = useState<string | null>(null);

  return (
    <Popover.Root modal>
      <Popover.Trigger asChild>
        <Button variant="ghost-secondary" size="icon-round">
          <SmileIcon className="h-6 w-6" />
        </Button>
      </Popover.Trigger>
      <Popover.Content align="start" className="w-[330px]">
        <Tabs.Root defaultValue={tabs[0]!.key}>
          <Tabs.List>
            {tabs.map(({ key, icon }) => (
              <Tabs.Trigger value={key} key={key}>
                {icon}
              </Tabs.Trigger>
            ))}
          </Tabs.List>
          {tabs.map(({ key, groups }) => (
            <Tabs.Content value={key} key={key} className="w-full max-w-full">
              <div className="flex max-h-[240px] flex-col overflow-y-auto overflow-x-hidden p-3">
                {groups.map(({ title, list }) => (
                  <div className="flex flex-col" key={title}>
                    <span className="text-sm">{title}</span>
                    <div className="flex flex-wrap justify-start gap-0.5 overflow-hidden">
                      {list.map((name) => (
                        <EmojiButton
                          key={name}
                          name={name}
                          skinTone={currentTone}
                          onSelect={onSelect}
                        />
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Tabs.Content>
          ))}
        </Tabs.Root>
        <div className="flex w-full max-w-full gap-1 border-t border-slate-700 bg-slate-800 p-2">
          {skinTones.map((tone) => (
            <Toggle
              key={tone.unicode}
              pressed={currentTone === tone.value}
              onPressedChange={() => setSkinTone(tone.value)}
            >
              <img src={`/emojis/${tone.unicode}.png`} alt={tone.name} />
            </Toggle>
          ))}
        </div>
      </Popover.Content>
    </Popover.Root>
  );
}

interface EmojiButtonProps {
  name: string;
  skinTone: string | null;
  onSelect: EmojiSelectProps['onSelect'];
  onMouseEnter?: (selected: Emoji) => void;
  onMouseLeave?: VoidFunction;
}

function EmojiButton(props: EmojiButtonProps) {
  const { name, skinTone, onSelect, onMouseEnter, onMouseLeave } = props;
  const emoji = getEmoji(name, skinTone);

  if (!emoji) {
    return (
      <Button variant="ghost" size="icon-sm" disabled>
        <img src="/missing.png" alt="missing" />
      </Button>
    );
  }

  return (
    <Button
      variant="ghost"
      size="icon-sm"
      onClick={() => onSelect(emoji)}
      onMouseEnter={() => onMouseEnter?.(emoji)}
      onMouseLeave={onMouseLeave}
    >
      <img src={`/emojis/${emoji?.unicode}.png`} alt={name} />
    </Button>
  );
}

function getEmoji(name: string, skinTone: string | null) {
  const base = emojis[name];
  if (!base || base._type === 'simple') return base;
  if (skinTone === null) return base;
  return base.skinVariations[skinTone];
}

type EmojiSelectorTab = {
  key: 'search' | EmojiGroupKey | 'custom';
  icon: JSX.Element;
  groups: {
    title: string;
    list: string[];
  }[];
};
const tabs: EmojiSelectorTab[] = [
  {
    key: 'search',
    icon: <MagnifyingGlassIcon className="h-6 w-6" />,
    groups: AllEmojiGroups,
  },
  {
    key: 'smileys',
    icon: <SmileIcon className="h-6 w-6" />,
    groups: [EmojiGroups.smileys],
  },
  {
    key: 'nature',
    icon: <LeafIcon className="h-6 w-6" />,
    groups: [EmojiGroups.nature],
  },
  {
    key: 'food',
    icon: <BurgerIcon className="h-6 w-6" />,
    groups: [EmojiGroups.food],
  },
  {
    key: 'travel',
    icon: <AirplaneIcon className="h-6 w-6" />,
    groups: [EmojiGroups.travel],
  },
  {
    key: 'activities',
    icon: <AmericanFootballIcon className="h-6 w-6" />,
    groups: [EmojiGroups.activities],
  },
  {
    key: 'objects',
    icon: <LightbulbIcon className="h-6 w-6" />,
    groups: [EmojiGroups.objects],
  },
  {
    key: 'symbols',
    icon: <PeaceSignIcon className="h-6 w-6" />,
    groups: [EmojiGroups.symbols],
  },
  {
    key: 'flags',
    icon: <FlagIcon className="h-6 w-6" />,
    groups: [EmojiGroups.flags],
  },
];
