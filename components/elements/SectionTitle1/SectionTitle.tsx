import BadgeCheck from '../Icons/BadgeCheck'
import Beaker from '../Icons/Beaker'
import LightningBold from '../Icons/LightningBold'

import { SectionTitleProps } from './types'

import { SectionTitleContainer } from './styles'

const iconProps = {
  width: 20,
  height: 20
}

export default function SectionTitle({ title, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon === 'lightning-bolt' && <LightningBold {...iconProps} />}
      {icon === 'badge-check' && <BadgeCheck {...iconProps} />}
      {icon === 'beaker' && <Beaker {...iconProps} />}
      <h2>{title}</h2>
    </SectionTitleContainer>
  )
}
