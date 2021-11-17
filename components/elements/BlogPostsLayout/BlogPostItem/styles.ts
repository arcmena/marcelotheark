import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const BlogPostItemContainer = styled.div(
  ({ theme: { spacing, mixins, fonts } }) => css`
    padding: ${spacing[4]};

    display: block;

    ${mixins.borderPrimaryGradient}

    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 22px;

      margin: ${spacing[3]} 0;
    }
  `
)

export const BlogPostItemControl = styled.div(
  ({ theme: { fonts } }) => css`
    display: flex;
    justify-content: space-between;
    align-items: center;

    font-size: ${fonts.sizes.xs};
    line-height: 14px;
  `
)

export const BlogPostItemTags = styled.div(
  ({ theme: { spacing, colors, fonts } }) => css`
    span {
      background-color: ${transparentize(0.4, colors.primary1)};
      border-radius: 4px;

      padding: 2px 5px;

      font-size: ${fonts.sizes.xs};
      line-height: 14px;
    }

    span:not(:first-child) {
      margin-left: ${spacing[2]};
    }
  `
)
