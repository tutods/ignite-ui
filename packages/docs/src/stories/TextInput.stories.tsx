import type { TextInputProps } from '@tutods-ignite-ui/react';
import { Box, Text, TextInput } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: TextInput,
  decorators: [
    Story => (
      <Box as="label" css={{ display: 'flex', flexDirection: 'column', gap: '$1' }}>
        <Text as="strong" size="sm">
          Name
        </Text>
        {Story()}
      </Box>
    ),
  ],
  title: 'Form/TextInput',
} as Meta<TextInputProps>;

export const Primary: StoryObj<TextInputProps> = {
  args: {
    placeholder: 'Type your name',
  },
};

export const WihtPrefix: StoryObj<TextInputProps> = {
  args: {
    prefix: 'cal.com/',
    placeholder: 'your-username',
  },
};

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
    placeholder: 'Type your name',
  },
};
