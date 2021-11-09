import styled, { css } from 'styled-components'

export const TimelineContainer = styled.section(() => css``)

export const TimelineListWrapper = styled.ul(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[8]};
    margin-bottom: 2;

    > li:not(:first-child) {
      margin-top: ${spacing[6]};
    }
  `
)
