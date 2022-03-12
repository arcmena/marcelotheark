import styled, { css } from 'styled-components'

export const MainContainer = styled.main(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[11]};
  `
)
