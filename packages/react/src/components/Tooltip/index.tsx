import type { ComponentProps, ReactNode } from 'react';

import * as RadixTooltip from '@radix-ui/react-tooltip';

import { TooltipArrow, TooltipContent } from '@/components/Tooltip/styles';

export type TooltipProps = Pick<ComponentProps<typeof TooltipContent>, 'side'> & {
  /**
   * Element will trigger the tooltip
   */
  children: ReactNode;

  /**
   * Content to show on tooltip
   */
  content: ReactNode;
};

export const Tooltip = ({ children, content, side = 'top' }: TooltipProps) => {
  return (
    <RadixTooltip.Provider delayDuration={0}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <TooltipContent side={side} sideOffset={4}>
            {content}

            <TooltipArrow />
          </TooltipContent>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
