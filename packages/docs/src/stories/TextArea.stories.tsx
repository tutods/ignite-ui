import type { Meta, StoryObj } from '@storybook/react';
import type { TextAreaProps } from '@tutods-ignite-ui/react';
import { Box, Text, TextArea } from '@tutods-ignite-ui/react';

export default {
  component: TextArea,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}>
        <Text as="strong" size="sm">
          Observations
        </Text>
        {Story()}
      </Box>
    ),
  ],
  title: 'Form /TextArea',
} as Meta<TextAreaProps>;

export const Primary: StoryObj<TextAreaProps> = {
  args: {
    placeholder: 'Add any observation',
  },
};

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
    placeholder: 'Add any observation',
  },
};
