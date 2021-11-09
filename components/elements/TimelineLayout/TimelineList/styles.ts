import styled, { css } from 'styled-components'

export const TimelineListContainer = styled.li(
  ({ theme: { fonts, colors } }) => css`
    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      color: ${colors.light};
      line-height: 22px;
    }
  `
)

export const TimelineListItemWrapper = styled.ul(
  ({ theme: { spacing } }) => css`
    margin-top: ${spacing[3]};

    > li:not(:first-child) {
      padding-top: ${spacing[5]};
    }
  `
)
