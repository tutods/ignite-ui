import { Button } from '@tutods-ignite-ui/react'
import { Meta, StoryFn, StoryObj } from '@storybook/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Button label',
  },
} as Meta<typeof Button>

export const Primary: StoryObj<typeof Button> = {}
export const Large: StoryObj<typeof Button> = {
  args: {
    size: 'large',
  },
}
