import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@ejc-ui/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/pugialli.png',
    alt: 'João Paulo Pugialli',
  },

  argTypes: {
    src: {
      control: {
        type: 'text',
      },
    },
    alt: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {
  args: {
    variant: 'md',
  },
}

export const Big: StoryObj<AvatarProps> = {
  args: {
    variant: 'lg',
  },
}
export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
    alt: undefined,
  },
}
