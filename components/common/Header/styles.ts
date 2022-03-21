import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header(
  ({ theme: { spacing } }) => css`
    padding: ${spacing[6]};
    margin-bottom: ${spacing[6]};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `
)

export const HeaderNav = styled.nav(
  ({ theme: { spacing, fonts, colors } }) => css`
    display: flex;
    gap: ${spacing[6]};

    a {
      font-size: ${fonts.sizes.xl};
      font-weight: ${fonts.weight.medium};
      color: ${colors.light};
    }
  `
)
