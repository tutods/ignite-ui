import type { Meta, StoryObj } from '@storybook/react';
import type { BoxProps } from '@tutods-ignite-ui/react';
import { Box, Heading, Text } from '@tutods-ignite-ui/react';

export default {
  args: {
    children: (
      <>
        <Heading as="h1">Box Heading</Heading>
        <Text>Testing box element</Text>
      </>
    ),
  },
  component: Box,
  title: 'Surfaces/Box',
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
