import { default as NextLink } from 'next/link'

import { LinkProps } from './types'

export default function Link({ href, children, ...rest }: LinkProps) {
  return (
    <NextLink href={href}>
      <a {...rest}>{children}</a>
    </NextLink>
  )
}
