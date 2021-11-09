import styled, { css } from 'styled-components'

export const ProjectsContainer = styled.section(() => css``)

export const ProjectsWrapper = styled.div(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};

    > a:not(:first-child) {
      margin-top: ${spacing[8]};
    }
  `
)
