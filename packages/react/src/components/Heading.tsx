import { styled } from '../styles'
import { ElementType, ComponentProps } from 'react'

export const Heading = styled('h2', {
  fontFamily: '$default',
  lineHeight: '$shorter',
  margin: 0,
  color: '$gray900',

  variants: {
    size: {
      sm: { fontSize: '$lg' },
      md: { fontSize: '$xl' },
      lg: { fontSize: '$3xl' },
      '2xl': { fontSize: '$4xl' },
      '3xl': { fontSize: '$5xl' },
    },
  },

  defaultVariants: {
    size: 'md',
  },
})

export interface HeadingProps extends ComponentProps<typeof Heading> {
  as?: ElementType
}

Heading.displayName = 'Heading'
