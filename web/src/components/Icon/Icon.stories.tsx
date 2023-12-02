import type { Meta, StoryObj } from '@storybook/react'

import { Icon, icons } from './Icon'

const meta: Meta<typeof Icon> = {
  component: Icon,
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Icon>

export const Overview: Story = {
  render: (args) => <Icon {...args} />,
}
