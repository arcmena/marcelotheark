import styled, { css } from 'styled-components'

export const FooterContainer = styled.footer(
  ({ theme: { fonts, colors, spacing } }) => css`
    margin-top: ${spacing[16]};
    padding-bottom: ${spacing[10]};
    font-size: ${fonts.sizes.lg};

    a {
      color: ${colors.light};
      font-weight: ${fonts.weight.medium};
    }
  `
)

export const FooterDivider = styled.div(
  ({ theme: { mixins } }) => css`
    ${mixins.primaryGradient};
    height: 2px;
  `
)

export const FooterDisclosure = styled.p(
  ({ theme: { spacing, colors, media, sizes } }) => css`
    max-width: 85%;
    margin: ${spacing[6]} auto 0;

    text-align: center;
    color: ${colors.gray};
    line-height: ${spacing[6]};

    ${media.md} {
      max-width: 528px;
    }
  `
)

export const FooterLinks = styled.div(
  ({ theme: { spacing, media, sizes } }) => css`
    margin: ${spacing[10]} auto 0;
    display: flex;
    justify-content: space-between;

    max-width: 85%;

    ${media.md} {
      max-width: ${sizes.screens.sm};
    }
  `
)
