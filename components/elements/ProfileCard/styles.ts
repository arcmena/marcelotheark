import styled, { css } from 'styled-components'

import { paddingX, paddingY } from '@helpers/styleHelpers'

export const ProfileCardContainer = styled.div.attrs({
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
    ${paddingX(spacing[5])}

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

    gap: ${spacing[4]};

    h3,
    a {
      font-size: ${fonts.sizes.lg};
    }

    h3 {
      font-weight: ${fonts.weight.semibold};
      color: ${colors.light};
    }

    a {
      color: ${colors.clearPurple};
      font-weight: ${fonts.weight.medium};
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
