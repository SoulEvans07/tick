'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { cn } from '~/utils/cn';

export { Root } from '@radix-ui/react-tabs';

export const List = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn(
      'inline-flex w-full justify-center border-b border-slate-700 bg-transparent text-slate-100',
      className
    )}
    {...props}
  />
));

List.displayName = TabsPrimitive.List.displayName;

export const Trigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      'inline-flex items-center justify-center whitespace-nowrap border-b-0 px-1.5 pb-[8px] pt-[8px] text-sm font-medium text-slate-500 ring-offset-background transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=active]:-mb-px data-[state=active]:border-b-[2px] data-[state=active]:bg-background data-[state=active]:pb-[7px] data-[state=active]:text-slate-200',
      className
    )}
    {...props}
  />
));

Trigger.displayName = TabsPrimitive.Trigger.displayName;

export const Content = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content ref={ref} className={cn(className)} {...props} />
));

Content.displayName = TabsPrimitive.Content.displayName;
