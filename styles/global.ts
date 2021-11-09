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
      font-size: 16px;
    }
    body {
      background-color: ${colors.dark};
      font-family: ${fonts.family};
      line-height: 1;
      font-size: 1rem;
      color: ${colors.light};
    }
    a {
      text-decoration: none;
      color: inherit;
    }
    button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      display: inline-flex;
    }
  `
)
