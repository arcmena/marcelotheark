import styled, { css } from 'styled-components'

const LogoContainer = styled.div(
  () => css`
    position: relative;
    display: inline-block;

    user-select: none;
  `
)

const White = styled.h1(
  ({ theme: { fonts, colors } }) => css`
    font-family: ${fonts.family};
    font-style: italic;
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes['2xl']};

    text-transform: uppercase;

    color: ${colors.light};

    position: relative;

    z-index: 2;
  `
)

const Gradient = styled.h1(
  ({ theme: { fonts, mixins } }) => css`
    font-family: ${fonts.family};
    font-style: italic;
    font-weight: ${fonts.weight.medium};
    font-size: ${fonts.sizes['2xl']};

    ${mixins.primaryGradient}

    text-transform: uppercase;

    position: absolute;

    background-clip: text;
    -webkit-text-fill-color: transparent;

    z-index: 1;

    top: 0.5px;
    left: 2px;
  `
)

export default function Logo() {
  return (
    <LogoContainer>
      <White>Ark</White>
      <Gradient>Ark</Gradient>
    </LogoContainer>
  )
}
