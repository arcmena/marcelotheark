import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer(
  ({ theme: { spacing, fonts, mixins } }) => css`
    display: flex;
    justify-content: center;

    padding: ${spacing[1]} 0;

    ${mixins.primaryGradient}

    margin-top: ${spacing[20]};

    span {
      font-size: ${fonts.sizes.base};
    }
  `
)
