import { transparentize } from 'polished'
import styled, { css } from 'styled-components'

import { paddingY, paddingX } from '@helpers/styleHelpers'

export default styled.div.attrs({ className: 'card' })(
  ({ theme: { colors, spacing } }) => css`
    background-color: ${colors.darkPurple};
    border: 1px solid ${transparentize(0.58, colors.primary1)};
    border-radius: 15px;

    ${paddingY(spacing[5])}
    ${paddingX(spacing[6])}
  `
)
