import type { TooltipProps } from '@tutods-ignite-ui/react';
import { Button, Tooltip } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
  args: {
    content: 'October 26 - Available',
    children: <Button>Day 26</Button>,
  },
} as Meta<TooltipProps>;

export const Primary: StoryObj<TooltipProps> = {};
