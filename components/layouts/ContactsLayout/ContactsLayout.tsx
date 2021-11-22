import { CONTACTS } from '@constants/urls'
import Github from '@components/elements/Icons/Github'
import Instagram from '@components/elements/Icons/Instagram'
import LinkedIn from '@components/elements/Icons/LinkedIn'

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
        <a
          href={CONTACTS.GITHUB}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my Github"
        >
          <Github {...iconProps} />
        </a>
        <a
          href={CONTACTS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my LinkedIn"
        >
          <LinkedIn {...iconProps} />
        </a>
        <a
          href={CONTACTS.INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my Instagram"
        >
          <Instagram {...iconProps} />
        </a>
      </ContactsWrapper>
    </ContactsContainer>
  )
}
