import styled, { css } from 'styled-components'
import { lighten } from 'polished'

export const PickerButton = styled.button(
  () => css`
    //
  `
)

export const PickerContent = styled.div(
  ({ theme: { spacing, colors } }) => css`
    display: flex;
    flex-direction: column;

    background-color: ${colors.darkPurple};

    border-radius: 8px;
  `
)

export const PickerContentButton = styled.button(
  ({ theme: { spacing, colors, fonts } }) => css`
    padding: ${spacing[3]};

    display: flex;
    align-items: center;

    border-radius: 8px;

    span {
      margin-left: ${spacing[2]};

      font-size: ${fonts.sizes.base};
      font-weight: ${fonts.weight.medium};
      color: ${colors.light};
    }

    &:hover {
      background-color: ${lighten(0.1, colors.darkPurple)};
    }
  `
)
