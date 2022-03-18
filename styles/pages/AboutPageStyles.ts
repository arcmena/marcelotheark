import styled, { css } from 'styled-components'

import { marginX } from '@helpers/styleHelpers'

export const AboutPageContainer = styled.div(
  ({ theme: { spacing } }) => css`
    ${marginX(spacing[6])}
  `
)

export const AboutPageIntroduction = styled.section(
  ({ theme: { fonts, colors, spacing } }) => css`
    margin-top: ${spacing[6]};

    p {
      color: ${colors.light};
      font-size: ${fonts.sizes.base};
      font-weight: ${fonts.weight.normal};
      line-height: 130.5%;
    }
  `
)

export const AboutPageTimeline = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};
  `
)
