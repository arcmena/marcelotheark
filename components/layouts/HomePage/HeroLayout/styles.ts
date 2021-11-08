import styled, { css } from 'styled-components'

export const HeroContainer = styled.section(
  ({ theme: { spacing, fonts } }) => css`
    p {
      margin-top: ${spacing[3]};

      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 22px;
    }
  `
)

export const TitleContainer = styled.div(
  ({ theme: { fonts, mixins, colors } }) => css`
    font-style: italic;
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes.base};
    line-height: 29px;
    letter-spacing: 0.005em;

    position: relative;
    display: inline-block;

    user-select: none;

    .white {
      color: ${colors.light};

      position: relative;

      z-index: 2;
    }

    .gradient {
      ${mixins.textPrimaryGradient}

      position: absolute;

      z-index: 1;

      width: 100%;

      top: 0.5px;
      left: 2px;
    }
  `
)
