import styled, { css } from 'styled-components'

export const TimelineContainer = styled.section(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[10]};
  `
)

export const TimelineListWrapper = styled.ul(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};

    > li:not(:first-child) {
      margin-top: ${spacing[6]};
    }
  `
)
