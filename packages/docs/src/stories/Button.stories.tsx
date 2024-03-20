import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@ejc-ui/react'
import { ArrowRight, Plus } from "@phosphor-icons/react"

export default {
  title: 'Form/Button',
  component: Button,

  args: {
    children: 'Example button',
    variant: 'primary',
    disabled: false,
    size: 'md',
  },
  argTypes: {
    size: {
      options: ['sm', 'md'],
      control: {
        type: 'inline-radio',
      },
    },
    variant: {
      options: ['primary', 'secondary', 'tertiary'],
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
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Create new',
  },
}
export const Tertiary: StoryObj<ButtonProps> = {
  args: {
    variant: 'tertiary',
    children: 'Cancel',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Smaller',
  },
}

export const WithIconAfter: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        Próximo Passo
        <ArrowRight weight="bold" />
      </>
    ),
  },
}

export const WithIconBefore: StoryObj<ButtonProps> = {
  args: {
    children: (
      <>
        <Plus weight="bold" />
        Adicionar carro
      </>
    ),
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
    children: 'Disabled',
  },
}
