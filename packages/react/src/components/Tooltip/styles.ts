import * as Tooltip from '@radix-ui/react-tooltip';

import { keyframes, styled } from '@/styles';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-4px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(4px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const TooltipContent = styled(Tooltip.Content, {
  borderRadius: '$xs',
  padding: '$3 $4',
  fontSize: '$sm',
  lineHeight: '$short',
  fontWeight: '$regular',
  color: '$gray100',
  backgroundColor: '$gray900',
  boxShadow: '$1 $4 $16 0 rgba(0, 0, 0, 0.25)',
  animationDuration: '400ms',
  animationTimingFunction: 'ease-in-out',
  willChange: 'transform, opacity',

  '&[data-state="delayed-open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },
});

const TooltipArrow = styled(Tooltip.Arrow, {
  fill: '$gray900',
});

export { TooltipArrow, TooltipContent };
