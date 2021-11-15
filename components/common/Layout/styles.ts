import styled, { css } from 'styled-components'

export const MainContainer = styled.main(
  ({ theme: { spacing, sizes } }) => css`
    section {
      margin-top: ${spacing[11]};

      padding: 0 ${spacing[6]};

      max-width: ${sizes.screens.md};
    }

    @media (min-width: ${sizes.screens.md}) {
      section {
        padding: 0;
        margin: ${spacing[11]} auto 0;
      }
    }
  `
)
