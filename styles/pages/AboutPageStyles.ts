import styled, { css } from 'styled-components'

import { paddingX } from '@helpers/styleHelpers'

export const AboutPageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    ${paddingX(spacing[6])}
  `
)

export const AboutPageTimeline = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};
  `
)
