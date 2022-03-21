import styled, { css } from 'styled-components'

export const LayoutContainer = styled.main(
  ({ theme: { sizes } }) => css`
    > div {
      max-width: ${sizes.screens.md};
      margin: 0 auto;
    }
  `
)
