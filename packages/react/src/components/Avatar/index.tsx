import { User } from 'phosphor-react';
import type { ComponentProps } from 'react';

import {
  AvatarContainer,
  AvatarFallback,
  AvatarImage,
} from '@/components/Avatar/styles';

export type AvatarProps = ComponentProps<typeof AvatarImage>;

export const Avatar = (props: AvatarProps) => (
  <AvatarContainer>
    <AvatarImage {...props} />

    <AvatarFallback delayMs={600}>
      <User />
    </AvatarFallback>
  </AvatarContainer>
);
