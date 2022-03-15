import { gridLayout } from '@helpers/styleHelpers'
import styled, { css } from 'styled-components'

export const ProfileCardContainer = styled.div.attrs({
  className: 'profileCard'
})(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.darkPurple};

    display: flex;

    border-radius: 0 4px 4px 0;
  `
)

export const ProfileCardInner = styled.div(
  ({ theme: { spacing } }) => css`
    padding: ${spacing[5]};

    display: flex;
  `
)

export const ProfileCardPersonalInfo = styled.div(
  ({ theme: { spacing, fonts, colors } }) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: ${spacing[4]};

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
    width: 4px;
    border-radius: 4px 0 0 4px;
  `
)
