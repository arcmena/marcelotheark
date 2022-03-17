import styled, { css } from 'styled-components'
import { transparentize } from 'polished'

import { paddingX, paddingY } from '@helpers/styleHelpers'

export const InputContainer = styled.input(
  ({ theme: { fonts, spacing, colors } }) => css`
    ${paddingX(spacing[3])}
    ${paddingY('11px')} 

    background: ${transparentize(0.9, colors.gray)};
    border-radius: 4px;
    border: 1px solid ${colors.gray};

    font-size: ${fonts.sizes.lg};
    ::placeholder {
      color: ${colors.gray};
    }

    caret-color: ${colors.gray};
    color: ${colors.light};

    &:focus {
      outline: none;
      border: 1px solid ${colors.primary1};
    }

    transition: border 0.1s ease-out;
  `
)
