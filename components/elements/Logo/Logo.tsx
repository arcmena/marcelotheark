import Link from '../Link'

import { SITE_URLS } from '@constants/urls'

import { LogoContainer, LogoWhite, LogoGradient } from './styles'

export default function Logo() {
  return (
    <Link href={SITE_URLS.HOME}>
      <LogoContainer>
        <LogoWhite>Ark</LogoWhite>
        <LogoGradient>Ark</LogoGradient>
      </LogoContainer>
    </Link>
  )
}
