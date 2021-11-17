import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const BlogPostContainer = styled.article(
  ({ theme: { sizes, spacing } }) => css`
    max-width: ${sizes.screens.md};
    margin: ${spacing[11]} auto 0;
    padding: 0 ${spacing[6]};

    @media (min-width: ${sizes.screens.md}) {
      padding: 0;
    }
  `
)

export const BlogPostTitle = styled.h1(
  ({ theme: { sizes, fonts } }) => css`
    text-align: center;

    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes['2xl']};
    line-height: 22px;

    @media (min-width: ${sizes.screens.md}) {
      text-align: left;
    }
  `
)

export const BlogPostInfo = styled.div(
  ({ theme: { fonts, spacing, colors } }) => css`
    margin: ${spacing[5]} 0;

    display: flex;
    justify-content: flex-start;
    gap: ${spacing[8]};

    font-size: ${fonts.sizes.sm};

    color: ${transparentize(0.2, colors.light)};
  `
)

export const BlogPostContentContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};
  `
)
