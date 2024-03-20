import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Box = styled('div', {
  padding: '$6',
  borderRadius: '$md',
  backgroundColor: '$gray100',
  border: '1px solid $gray200',
  boxShadow: '0px 8px 12px 6px rgba(0, 0, 0, 0.15)',

  width: '100%',

  ['> svg']: {
    color: '$primary'
  }
})

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType
}

Box.displayName = 'Box'
