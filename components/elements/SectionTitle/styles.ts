import styled, { css } from 'styled-components'

export const SectionTitleContainer = styled.div(
  ({ theme: { spacing, mixins, fonts, sizes } }) => css`
    ${mixins.primaryGradient}

    max-width: 170px;
    padding: 2px ${spacing[2]};
    border-radius: 2px;

    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.xs};
      line-height: 16px;
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: ${spacing[1]};
    }

    @media (min-width: ${sizes.screens.md}) {
      max-width: 270px;
    }
  `
)
