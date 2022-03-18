import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

export const BlogPostPageContainer = styled.article(
  ({ theme: { sizes, spacing } }) => css`
    max-width: ${sizes.screens.md};
    margin: 0 auto;
    padding: 0 ${spacing[6]};

    @media (min-width: ${sizes.screens.md}) {
      padding: 0;
    }
  `
)

export const BlogPostSubtitle = styled.h3(
  ({ theme: { spacing, fonts, colors } }) => css`
    margin-top: ${spacing[6]};

    font-size: ${fonts.sizes.xl};
    font-weight: ${fonts.weight.normal};
    color: ${colors.lightPurple};
  `
)

export const BlogPostImageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[6]};
  `
)

export const BlogPostInfo = styled.div(
  ({ theme: { fonts, spacing, colors } }) => css`
    margin: ${spacing[5]} 0;

    font-size: ${fonts.sizes.base};
    line-height: 118%;

    color: ${colors.lightPurple};
  `
)

export const BlogPostInfoTags = styled.span(
  ({ theme: { fonts, colors } }) => css`
    font-weight: ${fonts.weight.medium};
    color: ${colors.light};
  `
)

export const BlogPostContentContainer = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};
  `
)
