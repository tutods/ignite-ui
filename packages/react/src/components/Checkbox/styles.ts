import * as Checkbox from '@radix-ui/react-checkbox';

import { keyframes, styled } from '@/styles';

export const CheckboxContainer = styled(Checkbox.Root, {
  all: 'unset',
  backgroundColor: '$gray900',
  height: '$6',
  width: '$6',
  lineHeight: 0,
  borderRadius: '$xs',
  cursor: 'pointer',
  overflow: 'hidden',
  boxSizing: 'border-box',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '2px solid transparent',

  '&[data-state="checked"]': {
    backgroundColor: '$ignite300',
  },

  '&:focus, &[data-state="checked"]': {
    border: '2px solid $colors$ignite300',
  },
});

const slideIn = keyframes({
  from: {
    transform: 'translateY(-100%)',
  },
  to: {
    transform: 'translateY(0)',
  },
});

const slideOut = keyframes({
  from: {
    transform: 'translateY(0)',
  },
  to: {
    transform: 'translateY(-100%)',
  },
});

export const CheckboxIndicator = styled(Checkbox.Indicator, {
  color: '$white',
  width: '$4',
  height: '$4',

  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`,
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`,
  },
});
