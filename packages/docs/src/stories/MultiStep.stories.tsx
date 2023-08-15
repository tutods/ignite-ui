import type { MultiStepProps } from '@tutods-ignite-ui/react';
import { Box, MultiStep } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: MultiStep,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}>
        {Story()}
      </Box>
    ),
  ],
  title: 'Form/MultiStep',
  args: {
    size: 4,
    currentStep: 1,
  },
} as Meta<MultiStepProps>;

export const Primary: StoryObj<MultiStepProps> = {
  args: {},
};

export const Full: StoryObj<MultiStepProps> = {
  args: {
    currentStep: 4,
  },
};
