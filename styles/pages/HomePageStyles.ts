import styled, { css } from 'styled-components'

export const HomePageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    .profileCard {
      margin: ${spacing[12]} ${spacing[6]} 0;
    }
  `
)

export const HomePageContainer1 = styled.div(
  ({ theme: { spacing, sizes } }) => css`
    section {
      &:not(:first-child) {
        margin-top: ${spacing[11]};
      }

      margin: 0 auto;

      padding: 0 ${spacing[6]};

      max-width: ${sizes.screens.md};
    }

    @media (min-width: ${sizes.screens.md}) {
      section {
        padding: 0;
      }
    }
  `
)
