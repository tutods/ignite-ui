import type { Meta, StoryObj } from '@storybook/react';
import type { HeadingProps } from '@tutods-ignite-ui/react';
import { Heading } from '@tutods-ignite-ui/react';

export default {
  argTypes: {
    as: {
      description: 'This property allows you to change the render element',
      type: 'string',
    },
    size: {
      control: {
        type: 'select',
      },
      description: 'The size of the heading',
      options: ['2xl', '3xl', '4xl', '5xl', '6xl', 'lg', 'md', 'sm'],
      type: 'string',
    },
  },
  args: {
    children: 'Heading element content',
  },
  component: Heading,
  title: 'Typography/Heading',
} as Meta<HeadingProps>;

export const Primary: StoryObj<HeadingProps> = {};

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    as: 'h1',
    children: 'H1 Heading',
  },
  parameters: {
    docs: {
      description: {
        story:
          'By default, the Heading component renders a `h2` element, but this can be changed using the property `as`.',
      },
    },
  },
};
