import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { IConnectorProps } from './types'

export const TimelineListItemContainer = styled.li(
  () => css`
    position: relative;
    z-index: 1;
  `
)

export const Connector = styled('div')<IConnectorProps>(
  ({ isFirstElement, isLastElement, theme: { colors, spacing } }) => css`
    position: absolute;
    z-index: -1;

    background-color: ${colors.primary1};

    bottom: 0;
    left: 4.5px;
    top: ${isFirstElement ? spacing[4] : '0'};

    height: ${isLastElement ? spacing[7] : 'unset'};
    width: 3px;
  `
)

export const TimelineListItemWrapper = styled.div(
  () => css`
    display: flex;
  `
)

export const Circle = styled.div(
  ({ theme: { mixins, spacing } }) => css`
    ${mixins.primaryGradient}
    height: 12px;
    width: 12px;
    min-height: 12px;
    min-width: 12px;
    border-radius: 50%;

    margin-top: ${spacing[1]};
  `
)

export const TimelineListItemContent = styled.div(
  ({ theme: { fonts, colors, spacing } }) => css`
    margin-left: ${spacing[3]};

    .timeline-item__title {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 18px;

      color: ${colors.light};
    }

    p {
      margin-top: ${spacing[2]};

      font-size: ${fonts.sizes.base};
      line-height: 19px;
      color: ${transparentize(0.2, colors.light)};
    }
  `
)
