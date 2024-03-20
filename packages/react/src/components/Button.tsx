import { ComponentProps, ElementType } from 'react'
import { styled } from '../styles'

export const Button = styled('button', {
  all: 'unset',
  borderRadius: '$lg',
  fontSize: '$sm',
  fontWeight: '$medium',
  fontFamily: '$default',
  textAlign: 'center',
  // minWidth: 120,
  boxSizing: 'border-box',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',
  padding: '0 $4',

  cursor: 'pointer',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  svg: {
    width: '$4',
    height: '$4',
  },

  variants: {
    variant: {
      primary: {
        color: '$gray700',
        background: '$secondary',

        '&:focus': {
          boxShadow: '0 0 0 2px $colors$gray100',
        },

        '&:not(:disabled):hover': {
          boxShadow: '0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
        },

        '&:disabled': {
          color: '$gray100',
          opacity: 0.8,
        },
      },

      secondary: {
        color: '$yellow300',
        border: '2px solid $yellow300',

        '&:not(:disabled):hover': {
          background: '#7A590014',
        },

        '&:focus': {
          background: '#7A590014',
        },

        '&:disabled': {
          color: '$gray400',
          borderColor: '$gray400',
        },
      },

      tertiary: {
        color: '$yellow300',

        '&:not(:disabled):hover': {
          background: '#7A590014',
        },

        '&:focus': {
          background: '#7A590014',
        },

        '&:disabled': {
          color: '$gray400',
        },
      },
    },
    size: {
      sm: {
        height: 38,
      },

      md: {
        height: 46,
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'md',
  },
})

export interface ButtonProps extends ComponentProps<typeof Button> {
  as?: ElementType
}

Button.displayName = 'Button'
