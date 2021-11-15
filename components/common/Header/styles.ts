import styled, { css } from 'styled-components'

import { HeaderContainerProps } from './types'

export const HeaderContainer = styled('header')<HeaderContainerProps>(
  ({ theme: { spacing, mixins, sizes }, isAlternate }) => css`
    padding: ${spacing[5]} ${spacing[6]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${isAlternate &&
    css`
      ${mixins.primaryGradient}
    `}

    max-width: ${sizes.screens.md};

    @media (min-width: ${sizes.screens.md}) {
      margin: 0 auto;
      padding: ${spacing[5]} 0;
    }
  `
)
