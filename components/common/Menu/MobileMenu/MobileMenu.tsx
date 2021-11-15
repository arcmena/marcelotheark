import Header from '../../Header'
import ContactsLayout from '../../../layouts/ContactsLayout'
import Link from '../../../elements/Link'
import ArrowRight from '../../../elements/Icons/ArrowRight'

import useWindowSize from '../../../../hooks/useWindowSize'

import menuLinks from '../../../../constants/menuLinks'

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
  const windowSize = useWindowSize()

  return (
    <MobileMenuContainer
      isOpen={isMobileMenuOpen}
      windowSize={windowSize}
      ref={mobileMenuRef}
    >
      <Header handleCloseMobileMenu={handleCloseMobileMenu} isAlternate />

      <MobileMenuBody>
        <ul>
          {menuLinks.map(({ label, href }) => (
            <li key={label}>
              <Link href={href}>
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
