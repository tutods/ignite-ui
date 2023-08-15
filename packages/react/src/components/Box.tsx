import type { ComponentProps, ElementType } from 'react';

import { styled } from '@/styles';

export const Box = styled('div', {
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  borderRadius: '$md',
  padding: '$4',
});

Box.displayName = 'Box';

export type BoxProps = ComponentProps<typeof Box> & {
  as?: ElementType;
};
