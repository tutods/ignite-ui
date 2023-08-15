import type { ButtonProps } from '@tutods-ignite-ui/react';
import { Button } from '@tutods-ignite-ui/react';
import { ArrowRight } from 'phosphor-react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Button,
  title: 'Form/Button',
  args: {
    children: 'Send',
    variant: 'primary',
    size: 'md',
    disabled: false,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<ButtonProps>;

export const Primary: StoryObj<ButtonProps> = {
  args: {},
};

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    children: 'Create New',
    variant: 'secondary',
  },
};

export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    children: 'Cancel',
    variant: 'tertiary',
  },
};

export const Small: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    size: 'sm',
  },
};

export const WithIcon: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Next Step
        <ArrowRight weight="bold" />
      </>
    ),
  },
};

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    children: 'Send',
    disabled: true,
  },
};
