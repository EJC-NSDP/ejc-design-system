import { ComponentProps } from 'react'
import { AvatarContainer, AvatarFallback, AvatarImage } from './styles'
import { User } from "@phosphor-icons/react"

export interface AvatarProps extends ComponentProps<typeof AvatarImage> {
  variant: 'sm' | 'md' | 'lg'
}

export function Avatar({variant, ...props}: AvatarProps) {
  return (
    <AvatarContainer variant={variant}>
      <AvatarImage {...props} />

      <AvatarFallback delayMs={600}>
        <User />
      </AvatarFallback>
    </AvatarContainer>
  )
}

Avatar.displayName = 'Avatar'
