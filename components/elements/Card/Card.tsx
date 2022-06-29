import { darken, transparentize } from 'polished'
import styled, { css } from 'styled-components'

import { paddingY, paddingX } from '@helpers/styleHelpers'
import { ReactNode } from 'react'

const Card = ({ children, as = 
"div" }: { as?: string, children: ReactNode }) => {
  return (
      <>
        <CardBorder />
        {/* @ts-ignore */}
        <CardContainer as={as}>
          {children}
        </CardContainer>
    </>
  )
}

const CardBorder = styled.div(({ theme: { mixins } }) => css`
  ${mixins.primaryGradient}
    min-width: 4px;
    min-height: 4px;
    border-radius: 4px 4px 0 0;
`)

const CardContainer = styled.div.attrs({ className: 'card' })(
  ({ theme: { colors, spacing, media } }) => css`
    background-color: ${colors.darkPurple};
    border-radius: 4px;

    ${paddingX(spacing[3])};

    padding-top: ${spacing[4]};
    padding-bottom: ${spacing[5]};

    ${media.md} {
      ${paddingY(spacing[4])}
      ${paddingX(spacing[4])}
    } 
  `
)

export default Card
