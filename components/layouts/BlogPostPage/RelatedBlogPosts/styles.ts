import { gridLayout } from '@helpers/styleHelpers'
import styled, { css } from 'styled-components'

export const RelatedBlogPostsContainer = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};
  `
)

export const RelatedBlogPostsList = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[7]};

    ${gridLayout({ columns: 1, gap: spacing[5] })}
  `
)
