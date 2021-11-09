import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

export const ProjectItemContainer = styled.a(
  ({ theme: { spacing, mixins } }) => css`
    padding: 0 ${spacing[3]};

    display: block;

    ${mixins.borderPrimaryGradient}

    hr {
      ${mixins.primaryGradient}
      height: 1px;
      border: none;
    }
  `
)

export const ProjectItemTitle = styled.div(
  ({ theme: { spacing, fonts, colors } }) => css`
    padding: ${spacing[2]} ${spacing[2]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 22px;
      color: ${colors.light};
    }
  `
)

export const ProjectItemDescription = styled.div(
  ({ theme: { spacing, fonts, colors } }) => css`
    padding: ${spacing[5]} ${spacing[2]};

    p {
      font-size: ${fonts.sizes.xs};
      line-height: 14px;
      color: ${transparentize(0.1, colors.light)};
    }
  `
)
