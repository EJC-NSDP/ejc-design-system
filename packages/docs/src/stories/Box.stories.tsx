import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Heading, Text } from '@ejc-ui/react'
import { Cross } from "@phosphor-icons/react"

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Exemplo de elemento Box</Text>
      </>
    ),
  },

  argTypes: {
    children: {
      control: {
        type: null,
      },
    },
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}


export const IconBox: StoryObj<BoxProps> = {
  args: {
    css: (
      { width: '300px', display: 'flex', flexDirection: 'column', gap: '$4', alignItems: 'center', textAlign: 'center' }
    ),
    children: (
      <>
        <Cross size={48} weight="fill" />
        <Heading size='md'>Atividades Espirituais</Heading>
        <Text>Diversas atividades espirituais opcionais durante o ano todo</Text>
      </>
    ),
  },
}