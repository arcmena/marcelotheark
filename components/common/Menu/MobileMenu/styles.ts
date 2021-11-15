import styled, { css } from 'styled-components'

import { slideRight } from '../../../../styles/animations/slide'

import { MobileMenuContainerProps } from './types'

export const MobileMenuContainer = styled('div')<MobileMenuContainerProps>(
  ({ isOpen, windowSize, theme: { mixins, colors } }) => css`
    display: ${isOpen ? 'block' : 'none'};

    ${windowSize &&
    css`
      width: ${windowSize.width}px;
      height: ${windowSize.height}px;

      position: fixed;

      top: 0;
      right: -${windowSize.width}px;

      z-index: 20;

      animation: ${slideRight} 0.5s forwards;
    `}

    background-color: ${colors.dark};
  `
)

export const MobileMenuBody = styled.div(
  ({ theme: { mixins, spacing, colors, fonts } }) => css`
    ${mixins.backgroundLowOpacity};

    height: 100%;

    padding: ${spacing[6]};

    li {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 22px;

      display: flex;

      a {
        width: 100%;

        display: flex;
        justify-content: space-between;

        padding: ${spacing[4]} 0;
      }

      svg {
        fill: ${colors.light};
        stroke: ${colors.light};
      }

      position: relative;
    }

    li:not(:first-child):before {
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      top: 0;
      ${mixins.primaryGradient}
    }
  `
)
