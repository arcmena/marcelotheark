import { CONTACTS } from '../../../constants/urls'
import Github from '../../elements/Icons/Github'
import Instagram from '../../elements/Icons/Instagram'
import LinkedIn from '../../elements/Icons/LinkedIn'

import { ContactsLayoutProps } from './types'

import { ContactsContainer, ContactsWrapper } from './styles'

const iconProps = {
  width: 48,
  height: 48
}

export default function ContactsLayout({ id }: ContactsLayoutProps) {
  return (
    <ContactsContainer id={id}>
      <h2>You can reach me at:</h2>

      <ContactsWrapper>
        <a href={CONTACTS.GITHUB} target="_blank" rel="noreferrer">
          <Github {...iconProps} />
        </a>
        <a href={CONTACTS.LINKEDIN} target="_blank" rel="noreferrer">
          <LinkedIn {...iconProps} />
        </a>
        <a href={CONTACTS.INSTAGRAM} target="_blank" rel="noreferrer">
          <Instagram {...iconProps} />
        </a>
      </ContactsWrapper>
    </ContactsContainer>
  )
}
