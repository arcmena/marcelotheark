import styled, { css } from 'styled-components'

export const ContactsContainer = styled.section(
  ({ theme: { spacing, fonts } }) => css`
    margin-top: ${spacing[16]};

    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.lg};
      line-height: 22px;

      text-align: center;
    }
  `
)

export const ContactsWrapper = styled.div(
  ({ theme: { spacing } }) => css`
    display: flex;
    justify-content: center;
    align-items: center;

    margin-top: ${spacing[10]};

    a:not(:first-child) {
      margin-left: ${spacing[8]};
    }
  `
)
