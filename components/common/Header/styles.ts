import styled, { css } from 'styled-components'

import { HeaderContainerProps } from './types'

export const HeaderContainer = styled('header')<HeaderContainerProps>(
  ({ theme: { spacing, mixins }, isAlternate }) => css`
    padding: ${spacing[5]} ${spacing[6]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    ${isAlternate &&
    css`
      ${mixins.primaryGradient}
    `}
  `
)
