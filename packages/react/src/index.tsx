import { styled } from '@/styles';

export const Button = styled('button', {
  backgroundColor: '$ignite300',
  border: 0,
  borderRadius: '$sm',
  color: '$white',
  defaultVariants: {
    size: 'small',
  },

  fontFamily: '$default',

  variants: {
    size: {
      large: {
        fontsize: 16,
        padding: '$3 $6',
      },
      small: {
        fontSize: 14,
        padding: '$2 $4',
      },
    },
  },
});
