import { styled } from '@/styles';

export const TextInputContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  border: '2px solid $colors$gray900',
  borderRadius: '$sm',
  boxSizing: 'border-box',
  backgroundColor: '$gray900',

  variants: {
    size: {
      sm: {
        padding: '$2 $3',
      },
      md: {
        padding: '$3 $4',
      },
    },
  },

  '&:has(input:disabled)': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  '&:has(input:focus)': {
    borderColor: '$ignite300',
  },

  defaultVariant: { size: 'md' },
});

export const Prefix = styled('span', {
  color: '$gray400',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
});

export const Input = styled('input', {
  backgroundColor: 'transparent',
  border: 0,
  color: '$white',
  fontFamily: '$default',
  fontSize: '$sm',
  fontWeight: '$regular',
  width: '100%',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  '&:focus': {
    outline: 0,
  },

  '&::placeholder': {
    color: '$gray400',
  },
});
