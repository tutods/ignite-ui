import type { ComponentProps } from 'react';

import { styled } from '@/styles';

export const TextArea = styled('textarea', {
  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:focus': {
    borderColor: '$ignite300',
    outline: 0,
  },
  '&:placeholder': {
    color: '$gray400',
  },
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  minHeight: 80,
  padding: '$3 $4',
  resize: 'vertical',
});

export type TextAreaProps = ComponentProps<typeof TextArea>;
