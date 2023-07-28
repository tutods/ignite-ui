import { styled } from '@/styles';

export const TextInputContainer = styled('div', {
  '&:has(input:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },
  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },
  alignItems: 'baseline',
  backgroundColor: '$gray900',
  border: '2px solid $gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  display: 'flex',
  padding: '$3 $4',
});

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
});

export const Input = styled('input', {
  '&:disabled': {
    cursor: 'not-allowed',
  },
  '&:focus': {
    outline: 0,
  },
  '&:placeholder': {
    color: '$gray400',
  },
  backgroundColor: 'transparent',
  border: 0,
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  width: '100%',
});
