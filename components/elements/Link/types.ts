import { ReactNode } from 'react'
import { LinkProps as NextLinkProps } from 'next/link'

export interface LinkProps extends NextLinkProps {
  className?: string
  children: ReactNode
  isExternal?: boolean
  onClick?: () => void
}
