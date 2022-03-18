import styled, { css } from 'styled-components'

import { gridLayout } from '@helpers/styleHelpers'

export const ProjectsContainer = styled.section(() => css``)

export const ProjectsWrapper = styled.div(
  ({ theme: { spacing, sizes } }) => css`
    margin-top: ${spacing[8]};

    ${gridLayout({ columns: 1, gap: spacing[6] })}

    @media (min-width: ${sizes.screens.md}) {
      ${gridLayout({ columns: 2, gap: spacing[6] })}
    }
  `
)
