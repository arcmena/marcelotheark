import { gridLayout } from '@helpers/styleHelpers'

import styled, { css } from 'styled-components'

export const LatestBlogPostsContainer = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[12]};
  `
)

export const LatestBlogPostsItems = styled.nav(
  ({ theme: { spacing } }) => css`
    display: flex;
    flex-direction: column;
    ${gridLayout({ columns: 1, gap: spacing[7] })}

    margin-top: ${spacing[7]};
  `
)

export const LatestBlogPostsMore = styled.div(
  ({ theme: { mixins, fonts, spacing } }) => css`
    display: flex;
    justify-content: center;
    margin-top: ${spacing[6]};

    a {
      ${mixins.textPrimaryGradient}

      display: flex;
      align-items: center;
      gap: ${spacing[2]};

      font-family: ${fonts.family};
      font-size: ${fonts.sizes.xl};
      font-weight: ${fonts.weight.semibold};
      letter-spacing: 0.1em;
    }
  `
)
