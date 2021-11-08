import styled, { css } from 'styled-components'

export const MainContainer = styled.main(
  ({ theme: { spacing } }) => css`
    section {
      margin-top: ${spacing[11]};

      padding: 0 ${spacing[6]};
    }
  `
)
