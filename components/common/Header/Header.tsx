import Logo from '../../elements/Logo'
import X from '../../elements/Icons/X'
import Hamburguer from '../../elements/Icons/Hamburguer'
import Link from '../../elements/Link'

import menuLinks from '../../../constants/menuLinks'

import { HeaderProps } from './types'

import { HeaderContainer, HeaderDesktopItems } from './styles'
import { SITE_URLS } from '../../../constants/urls'

const iconProps = {
  width: 30,
  height: 30
}

export default function Header({
  handleOpenMobileMenu,
  handleCloseMobileMenu,
  isAlternate = false
}: HeaderProps) {
  return (
    <HeaderContainer isAlternate={isAlternate}>
      <Logo />

      <button
        className="mobile-hamburguer"
        onClick={isAlternate ? handleCloseMobileMenu : handleOpenMobileMenu}
        aria-label={isAlternate ? 'Close Menu' : 'Open Menu'}
      >
        {isAlternate ? <X {...iconProps} /> : <Hamburguer {...iconProps} />}
      </button>

      <HeaderDesktopItems>
        <ul>
          {menuLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} aria-label={label}>
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href={SITE_URLS.CONTACTS}>Contact</Link>
          </li>
        </ul>
      </HeaderDesktopItems>
    </HeaderContainer>
  )
}
