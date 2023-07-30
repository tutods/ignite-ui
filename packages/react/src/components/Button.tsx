import type { ComponentProps, ElementType } from 'react';

import { styled } from '@/styles';

export const Button = styled('button', {
  all: 'unset',

  minWidth: 120,

  padding: '0 $4',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  cursor: 'pointer',

  display: 'inline-flex',
  alignItems: 'center',
  gap: '$2',
  justifyContent: 'center',

  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$medium',
  textAlign: 'center',

  svg: {
    height: '$4',
    width: '$4',
  },

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },

    variant: {
      primary: {
        backgroundColor: '$ignite500',
        color: '$white',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite300',
        },

        '&:disabled': {
          backgroundColor: '$gray200',
        },
      },

      secondary: {
        color: '$ignite300',
        border: '2px solid $ignite500',

        '&:not(:disabled):hover': {
          backgroundColor: '$ignite500',
          color: '$white',
        },

        '&:disabled': {
          color: '$gray200',
          borderColor: '$gray200',
        },
      },

      tertiary: {
        color: '$gray100',

        '&:not(:disabled):hover': {
          color: '$white',
        },

        '&:disabled': {
          color: '$gray600',
        },
      },
    },
  },

  defaultVariants: {
    size: 'md',
    variant: 'primary',
  },
});

export type ButtonProps = ComponentProps<typeof Button> & {
  as?: ElementType;
};
