import styled, { css } from 'styled-components'

import { gridLayout } from '@helpers/styleHelpers'

export const ProjectsContainer = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};
  `
)

export const ProjectsDescription = styled.h2(
  ({ theme: { fonts, spacing } }) => css`
    font-weight: ${fonts.weight.normal};
    font-size: ${fonts.sizes.lg};

    margin-top: ${spacing[7]};
  `
)

export const ProjectsList = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[7]};

    ${gridLayout({ columns: 1, gap: spacing[5] })}
  `
)
