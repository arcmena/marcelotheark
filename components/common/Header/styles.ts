import styled, { css } from 'styled-components'

export const HeaderContainer = styled.header(
  ({ theme: { spacing, sizes, media } }) => css`
    padding: ${spacing[6]};

    display: flex;
    justify-content: space-between;
    align-items: center;

    max-width: ${sizes.screens.md};
    margin: 0 auto ${spacing[6]};

    .logo-full {
      display: none;
    }

    ${media.md} {
      .logo-full {
        display: inline;
      }

      .logo-min {
        display: none;
      }
    }
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
