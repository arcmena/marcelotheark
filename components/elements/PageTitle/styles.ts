import styled, { css } from 'styled-components'

export const PageTitleContainer = styled.h1(
  ({ theme: { colors, fonts } }) => css`
    font-size: ${fonts.sizes['4xl']};
    font-weight: ${fonts.weight.semibold};
    color: ${colors.light};
    letter-spacing: 2px;
  `
)
