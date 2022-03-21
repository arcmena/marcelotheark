import Link from '@components/elements/Link'
import Logo from '@components/elements/Logo'

import { SITE_URLS } from '@constants/urls'

import { HeaderContainer, HeaderNav } from './styles'

const logoProps = {
  width: 104,
  height: 36
}

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={SITE_URLS.HOME} aria-label="Ark logo - Go home">
        <Logo {...logoProps} />
      </Link>

      <HeaderNav>
        <Link href={SITE_URLS.ABOUT}>About</Link>
        <Link href={SITE_URLS.BLOG}>Blog</Link>
      </HeaderNav>
    </HeaderContainer>
  )
}
