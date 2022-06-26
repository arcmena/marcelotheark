import Link from '@components/elements/Link'
import { LogoFull, LogoMin } from '@components/elements/Logo'
import LocalePicker from '../LocalePicker/LocalePicker'

import { SITE_URLS } from '@constants/urls'

import { HeaderContainer, HeaderNav } from './styles'

const logoFullProps = {
  width: 104,
  height: 36
}

const logoMinProps = {
  width: 36,
  height: 36
}

export default function Header() {
  return (
    <HeaderContainer>
      <Link href={SITE_URLS.HOME} aria-label="Ark logo - Go home">
        <LogoFull {...logoFullProps} />
        <LogoMin {...logoMinProps} />
      </Link>

      <HeaderNav>
        <Link href={SITE_URLS.ABOUT}>About</Link>
        <Link href={SITE_URLS.BLOG}>Blog</Link>
        <LocalePicker />
      </HeaderNav>
    </HeaderContainer>
  )
}
