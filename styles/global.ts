import { createGlobalStyle, css } from 'styled-components'

export default createGlobalStyle(
  ({ theme: { fonts, colors } }) => css`
    * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
    }
    html {
      width: 100%;
      height: -webkit-fill-available;
    }
    body {
      background-color: ${colors.dark};
      font-family: ${fonts.family};
      color: ${colors.light};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
  `
)
