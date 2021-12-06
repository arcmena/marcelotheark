import { MutableRefObject } from 'react'

import { TWindowSize } from '../../../../hooks/useWindowSize'

export interface MobileMenuProps {
  isMobileMenuOpen: boolean
  handleCloseMobileMenu: () => void
  mobileMenuRef: MutableRefObject<HTMLDivElement>
}

export interface MobileMenuContainerProps {
  isOpen: boolean
}
