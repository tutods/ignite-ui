import type { ComponentProps, ElementType } from 'react';

import { styled } from '@/styles';

export const Text = styled('p', {
  color: '$gray100',

  defaultVariants: {
    size: 'md',
  },

  fontFamily: '$default',
  lineHeight: '$base',
  margin: 0,

  variants: {
    size: {
      '2xl': {
        fontSize: '$2xl',
      },
      '4xl': {
        fontSize: '$4xl',
      },
      '5xl': {
        fontSize: '$5xl',
      },
      '6xl': {
        fontSize: '$6xl',
      },
      '7xl': {
        fontSize: '$7xl',
      },
      '8xl': {
        fontSize: '$8xl',
      },
      '9xl': {
        fontSize: '$9xl',
      },
      lg: {
        fontSize: '$lg',
      },
      md: {
        fontSize: '$md',
      },
      sm: {
        fontSize: '$sm',
      },
      xl: {
        fontSize: '$xl',
      },
      xs: {
        fontSize: '$xs',
      },
      xxs: {
        fontSize: '$xxs',
      },
    },
  },
});

Text.displayName = 'Text';

export type TextProps = ComponentProps<typeof Text> & {
  as?: ElementType;
};
