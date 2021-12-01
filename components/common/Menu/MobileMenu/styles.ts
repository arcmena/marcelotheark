import styled, { css } from 'styled-components'

import { MobileMenuContainerProps } from './types'

export const MobileMenuContainer = styled('div')<MobileMenuContainerProps>(
  ({ isOpen, windowSize, theme: { mixins, colors } }) => css`
    opacity: ${isOpen ? '1' : '0'};
    transform: translateX(${isOpen ? '0' : '+100%'});

    transition: transform 0.2s, opacity 0.2s;

    ${windowSize &&
    css`
      width: ${windowSize.width}px;
      height: ${windowSize.height}px;

      position: fixed;

      top: 0;
      right: 0;
      left: 0;

      z-index: 20;
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
