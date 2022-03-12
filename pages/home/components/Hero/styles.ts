import styled, { css } from 'styled-components'

export const HeroContainer = styled.div(
  ({ theme: { spacing, colors, fonts } }) => css`
    margin-top: ${spacing[6]};
    padding: 0 ${spacing[6]};

    h1 {
      color: ${colors.light};
      font-size: ${fonts.sizes['5xl']};
      font-weight: ${fonts.weight.semibold};
      line-height: 50.4px;
    }

    h2 {
      margin-top: ${spacing[8]};
      color: ${colors.lightPurple};
      font-size: ${fonts.sizes['2xl']};
      font-weight: ${fonts.weight.normal};
      max-width: 75%;
      line-height: 28.32px;
    }
  `
)
