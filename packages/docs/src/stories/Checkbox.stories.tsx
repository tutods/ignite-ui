import type { CheckboxProps } from '@tutods-ignite-ui/react';
import { Box, Checkbox, Text } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Checkbox,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', gap: '$1' }}>
        {Story()}
        <Text as="strong" size="sm">
          Accept terms of use
        </Text>
      </Box>
    ),
  ],
  title: 'Form/Checkbox',
} as Meta<CheckboxProps>;

export const Primary: StoryObj<CheckboxProps> = {
  args: {
    'aria-label': 'Accept terms of use',
  },
};
