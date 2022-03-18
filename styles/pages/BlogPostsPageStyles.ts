import { gridLayout, marginX } from '@helpers/styleHelpers'
import styled, { css } from 'styled-components'

export const BlogPostsPageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    ${marginX(spacing[6])}
  `
)

export const BlogPostPageDescription = styled.h2(
  ({ theme: { fonts, spacing } }) => css`
    font-size: ${fonts.sizes.lg};
    font-weight: ${fonts.weight.normal};

    margin-top: ${spacing[8]};
    line-height: 130.5%;
  `
)

export const BlogPostPageSearchInput = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};

    input {
      width: 100%;
    }
  `
)

export const BlogPostPageResults = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[11]};

    ${gridLayout({ columns: 1, gap: spacing[5] })}
  `
)
