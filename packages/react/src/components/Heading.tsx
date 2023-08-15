import type { ComponentProps, ElementType } from 'react';

import { styled } from '@/styles';

export const Heading = styled('h2', {
  color: '$gray100',

  defaultVariants: {
    size: 'md',
  },

  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,

  variants: {
    size: {
      '2xl': {
        fontSize: '$5xl',
      },
      '3xl': {
        fontSize: '$6xl',
      },
      '4xl': {
        fontSize: '$7xl',
      },
      '5xl': {
        fontSize: '$8xl',
      },
      '6xl': {
        fontSize: '$9xl',
      },
      lg: {
        fontSize: '$4xl',
      },
      md: {
        fontSize: '$2xl',
      },
      sm: {
        fontSize: '$xl',
      },
    },
  },
});

Heading.displayName = 'Heading';

export type HeadingProps = ComponentProps<typeof Heading> & {
  as?: ElementType;
};
