import { CONTACTS } from '@constants/urls'
import { FooterContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div className="divider" />

      <p>
        2022 © arcmena. This website was designed on <a>figma</a>, developed
        with <a>nextjs</a>, <a>graphcms</a> & deployed to <a>vercel</a>.
      </p>

      <div className="links">
        <a
          href={CONTACTS.GITHUB}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my Github"
        >
          github
        </a>
        <a
          href={CONTACTS.LINKEDIN}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my LinkedIn"
        >
          linkedin
        </a>
        <a
          href={CONTACTS.INSTAGRAM}
          target="_blank"
          rel="noreferrer"
          aria-label="Checkout my Instagram"
        >
          instagram
        </a>
      </div>
    </FooterContainer>
  )
}
