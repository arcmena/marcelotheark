import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header(
  ({ theme: { spacing } }) => css`
    padding: ${spacing[5]} ${spacing[6]};
  `
)
