import styled, { css } from 'styled-components'
import BadgeCheck from '../Icons/BadgeCheck'
import Beaker from '../Icons/Beaker'
import LightningBold from '../Icons/LightningBold'

const Container = styled.div(
  ({ theme: { spacing, mixins, fonts } }) => css`
    ${mixins.primaryGradient}

    max-width: 170px;
    padding: 2px ${spacing[2]};
    border-radius: 2px;

    h2 {
      font-style: italic;
      font-weight: ${fonts.weight.medium};
      font-size: ${fonts.sizes.sm};
      line-height: 16px;
    }

    display: flex;
    align-items: center;

    svg {
      margin-right: ${spacing[1]};
    }
  `
)

interface SectionTitleProps {
  title: string
  icon: 'lightning-bolt' | 'badge-check' | 'beaker'
}

const iconProps = {
  width: 20,
  height: 20
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <Container>
      {icon === 'lightning-bolt' && <LightningBold {...iconProps} />}
      {icon === 'badge-check' && <BadgeCheck {...iconProps} />}
      {icon === 'beaker' && <Beaker {...iconProps} />}
      <h2>{title}</h2>
    </Container>
  )
}
