import Logo from '../../elements/Logo'

import { HeaderContainer, HeaderHamburguerIcon } from './styles'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo />

      <button>
        <HeaderHamburguerIcon />
      </button>
    </HeaderContainer>
  )
}
