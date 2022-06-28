import styled, { css } from 'styled-components'

import { paddingX, paddingY } from '@helpers/styleHelpers'

export const ProfileCardContainer = styled.section.attrs({
  className: 'profileCard'
})(
  ({ theme: { colors } }) => css`
    background-color: ${colors.darkPurple};

    display: flex;

    border-radius: 0 4px 4px 0;
  `
)

export const ProfileCardInner = styled.div(
  ({ theme: { spacing, media } }) => css`
    ${paddingY(spacing[5])}

    padding-left: ${spacing[3]};
    padding-right: ${spacing[2]};

    display: flex;
    flex-direction: column;

    ${media.sm} {
      flex-direction: row;
    }
  `
)

export const ProfileCardPersonalInfo = styled.div(
  ({ theme: { spacing, fonts, colors, media } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;

    margin-top: ${spacing[5]};

    gap: ${spacing[3]};


    h3 {
      font-size: ${fonts.sizes.lg};
      font-weight: ${fonts.weight.semibold};
      color: ${colors.light};
      letter-spacing: 1.1px;
    }

    a {
      font-size: ${fonts.sizes.base};
      color: ${colors.clearPurple};
      font-weight: ${fonts.weight.medium};
      letter-spacing: 1.1px;
    }

    ${media.sm} {
      margin-top: 0;
      margin-left: ${spacing[4]};
    }
  `
)

export const ProfileCardLinks = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    gap: ${spacing[6]};
  `
)

export const ProfileCardLeftBorder = styled.div(
  ({ theme: { mixins } }) => css`
    ${mixins.primaryGradientToTop}
    min-width: 4px;
    border-radius: 4px 0 0 4px;
  `
)
