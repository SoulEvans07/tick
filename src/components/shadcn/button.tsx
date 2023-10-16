import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '~/utils/cn';

export const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-md font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-blue-500 text-blue-100 hover:bg-blue-500/90',
        destructive:
          'bg-rose-600 text-rose-600-foreground hover:bg-rose-600/90',
        outline:
          'border border-input bg-slate-900 hover:bg-blue-500 hover:text-blue-100',
        secondary: 'bg-slate-700 text-slate-300 hover:bg-slate-700/80',
        ghost: 'hover:bg-blue-500 hover:text-blue-100',
        'ghost-secondary': 'text-blue-500 hover:bg-blue-500/10',
        text: 'hover:text-blue-500',
        link: 'text-blue-500 underline-offset-4 hover:underline',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-full px-4',
        lg: 'h-11 rounded-md px-8',
        'icon-sm': 'h-8 w-8 items-center justify-center p-1',
        icon: 'h-10 rounded-md w-10',
        'icon-round': 'h-10 rounded-full w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
