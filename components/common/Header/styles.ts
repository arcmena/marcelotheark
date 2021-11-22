import styled, { css } from 'styled-components'

import menuLinks from '@constants/menuLinks'
import { gridLayout } from '@helpers/styleHelpers'

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

      .mobile-hamburguer {
        display: none;
      }
    }
  `
)

export const HeaderDesktopItems = styled.nav(
  ({ theme: { sizes, spacing, fonts, mixins } }) => css`
    display: none;

    ul {
      ${gridLayout({ columns: menuLinks.length + 1, gap: spacing[6] })}
    }

    li {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.base};
      line-height: 19px;
      position: relative;

      display: flex;
      justify-content: center;
      align-items: center;
    }

    li:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 3px;
      bottom: 2px;
      left: 12px;
      z-index: -1;
      ${mixins.gradientPrimaryToTransparent}
    }

    @media (min-width: ${sizes.screens.md}) {
      display: block;
    }
  `
)
