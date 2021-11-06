import styled, { css } from 'styled-components'

import HamburguerIcon from '../../elements/Icons/Hamburguer'

import { enforceIconSize } from '../../../helpers/styleHelpers'

export const HeaderContainer = styled.header(
  ({ theme: { spacing } }) => css`
    padding: ${spacing[5]} ${spacing[6]};

    display: flex;
    justify-content: space-between;
    align-items: center;
  `
)

export const HeaderHamburguerIcon = styled(HamburguerIcon)`
  ${enforceIconSize('30px')}
`
