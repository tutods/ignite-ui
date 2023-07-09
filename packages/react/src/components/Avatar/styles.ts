import * as Avatar from '@radix-ui/react-avatar';

import { styled } from '@/styles';

export const AvatarContainer = styled(Avatar.Root, {
  borderRadius: '$full',
  display: 'inline-block',
  height: '$12',
  overflow: 'hidden',
  width: '$12',
});

export const AvatarImage = styled(Avatar.Image, {
  borderRadius: 'inherit',
  height: '100%',
  objectFit: 'cover',
  width: '100%',
});

export const AvatarFallback = styled(Avatar.Fallback, {
  alignItems: 'center',
  backgroundColor: '$gray600',
  color: '$gray200',
  display: 'flex',
  height: '100%',
  justifyContent: 'center',

  svg: {
    height: '$6',
    width: '$6',
  },

  width: '100%',
});
