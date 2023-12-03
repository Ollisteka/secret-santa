import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from './Avatar'
import avatar1 from './avatars/avatar-01.png';
import avatar2 from './avatars/avatar-02.png';

const meta: Meta<typeof Avatar> = {
  component: Avatar,
  tags: ['autodocs']
}

export default meta

type Story = StoryObj<typeof Avatar>

export const Hidden: Story = {
  render: () => <Avatar />,
}

export const InitialOnly: Story = {
  render: () => <Avatar name={'Olga Zhukova'} />,
}


export const WithImage: Story = {
  render: () => <Avatar name={'Olga Zhukova'} img={avatar1} />,
}


export const Santa: Story = {
  render: () => <Avatar name={'Ivan Ivanov'} img={avatar2} isSanta />,
}

export const WithAlert: Story = {
  render: () => {
    return <>
      <Avatar name={'Olga Zhukova'} img={avatar1} status={'success'} />
      <Avatar name={'Olga Zhukova'} img={avatar1} status={'warning'} />
      <Avatar name={'Olga Zhukova'} img={avatar1} status={'error'} />
    </>;
  },
}
