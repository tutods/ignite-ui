import type { TextProps } from '@tutods-ignite-ui/react';
import { Text } from '@tutods-ignite-ui/react';
import { fontSizes } from '@tutods-ignite-ui/tokens';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  argTypes: {
    size: {
      control: {
        type: 'select',
      },
      description: 'The size of the text',
      options: Object.keys(fontSizes),
      type: 'string',
    },
  },
  args: {
    children: 'Text element content',
  },
  component: Text,
  title: 'Typography/Text',
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    as: 'strong',
    children: 'Strong text',
  },
};
