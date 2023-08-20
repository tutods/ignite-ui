import { useState } from 'react';

import type { ToastProps } from '@tutods-ignite-ui/react';
import { Button, Toast } from '@tutods-ignite-ui/react';
import type { Meta, StoryObj } from '@storybook/react';

export default {
  component: Toast,
  title: 'Data Display/Toast',
  args: {
    title: 'Event scheduled!',
    description: 'Friday, October 23 at 4PM',
  },
  parameters: {
    layout: 'centered',
  },
  decorators: [
    Story => (
      <div
        style={{
          minWidth: '800px',
          height: 400,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {Story()}
      </div>
    ),
  ],
} as Meta<ToastProps>;

const ToastRender = (args: ToastProps) => {
  const [showToast, setShowToast] = useState(false);

  return (
    <Toast {...args} isOpen={showToast} setIsOpen={setShowToast}>
      <Button onClick={() => setShowToast(true)}>Schedule</Button>
    </Toast>
  );
};

export const Primary: StoryObj<ToastProps> = {
  render: ToastRender,
};

export const WithTimeout: StoryObj<ToastProps> = {
  render: ToastRender,
  name: 'Toast with timeout (5s)',
  args: {
    timeout: 5000,
  },
};

export const WithoutCloseButton: StoryObj<ToastProps> = {
  render: ToastRender,
  name: 'Toast withhout close button',
  args: {
    timeout: 5000,
    showClose: false,
  },
};
