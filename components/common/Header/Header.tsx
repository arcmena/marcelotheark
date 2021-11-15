import Logo from '../../elements/Logo'
import X from '../../elements/Icons/X'
import Hamburguer from '../../elements/Icons/Hamburguer'

import { HeaderProps } from './types'

import { HeaderContainer } from './styles'

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
        onClick={isAlternate ? handleCloseMobileMenu : handleOpenMobileMenu}
      >
        {isAlternate ? <X {...iconProps} /> : <Hamburguer {...iconProps} />}
      </button>
    </HeaderContainer>
  )
}
