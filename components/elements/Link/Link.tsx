import { default as NextLink } from 'next/link'

import { LinkProps } from './types'

export default function Link({
  href,
  children,
  isExternal = false,
  ...rest
}: LinkProps) {
  if (isExternal) {
    return (
      <a
        href={String(href)}
        target="_blank"
        rel="noopener noreferrer"
        {...rest}
      >
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}
