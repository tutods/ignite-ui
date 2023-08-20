import type { TooltipProps } from '@tutods-ignite-ui/react';
import { Button, Tooltip } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Tooltip,
  title: 'Data Display/Tooltip',
  args: {
    content: 'October 26 - Available',
  },
} as Meta<TooltipProps>;

const TooltipRender = (args: TooltipProps) => {
  return (
    <Tooltip {...args}>
      <Button>Day 26</Button>
    </Tooltip>
  );
};

export const Primary: StoryObj<TooltipProps> = {
  render: TooltipRender,
};
