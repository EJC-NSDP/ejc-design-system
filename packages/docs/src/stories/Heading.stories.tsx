 import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@ejc-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,

  args: {
    size: '2xl',
    children: 'Example title',
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', '2xl', '3xl'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    children: 'H1 Heading',
    as: 'h1',
    size: '3xl',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Por padrão o heading sempre será um `h2`, mas podemos alterar isso com a propriedade `as`.',
      },
    },
  },
}
