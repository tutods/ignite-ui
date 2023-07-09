import type { Meta, StoryObj } from '@storybook/react';
import type { AvatarProps } from '@tutods-ignite-ui/react';
import { Avatar } from '@tutods-ignite-ui/react';

export default {
  args: {
    alt: 'Daniel Sousa @TutoDS',
    src: 'https://github.com/tutods.png',
  },
  component: Avatar,
  title: 'Data Display/Avatar',
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
