import Header from '../../Header1'
import ContactsLayout from '@components/layouts/ContactsLayout'
import Link from '@components/elements/Link'
import ArrowRight from '@components/elements/Icons/ArrowRight'

import menuLinks from '@constants/menuLinks'

import { MobileMenuProps } from './types'

import { MobileMenuBody, MobileMenuContainer } from './styles'

const iconProps = {
  width: 24,
  height: 24
}

export default function MobileMenu({
  isMobileMenuOpen,
  handleCloseMobileMenu,
  mobileMenuRef
}: MobileMenuProps) {
  return (
    <MobileMenuContainer isOpen={isMobileMenuOpen} ref={mobileMenuRef}>
      <Header handleCloseMobileMenu={handleCloseMobileMenu} isAlternate />

      <MobileMenuBody>
        <ul>
          {menuLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href} aria-label={label}>
                {label} <ArrowRight {...iconProps} />
              </Link>
            </li>
          ))}
        </ul>

        {/* to prevent svgs not rendering due to conflicting inner ids */}
        {isMobileMenuOpen && <ContactsLayout />}
      </MobileMenuBody>
    </MobileMenuContainer>
  )
}
