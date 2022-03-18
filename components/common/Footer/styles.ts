import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer(
  ({ theme: { fonts, colors, spacing, mixins } }) => css`
    margin-top: ${spacing[16]};
    padding-bottom: ${spacing[10]};
    font-size: ${fonts.sizes.lg};

    .divider {
      ${mixins.primaryGradient};
      height: 1px;
    }

    p {
      max-width: 85%;
      margin: ${spacing[6]} auto 0;

      text-align: center;
      color: ${colors.gray};
      line-height: ${spacing[6]};
    }

    a {
      color: ${colors.light};
      font-weight: ${fonts.weight.medium};
    }

    .links {
      margin: ${spacing[10]} auto 0;
      display: flex;
      justify-content: space-between;

      max-width: 85%;
    }
  `
)
