import Link from '@components/elements/Link'

import { CONTACTS, TECHS } from '@constants/urls'

import { FooterContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div className="divider" />

      <p>
        2022 © arcmena. This website was designed on{' '}
        <Link isExternal href={TECHS.FIGMA} aria-label="Checkout figma">
          figma
        </Link>
        , developed with{' '}
        <Link isExternal href={TECHS.NEXTJS} aria-label="Checkout nextjs">
          nextjs
        </Link>
        ,{' '}
        <Link isExternal href={TECHS.GRAPHCMS} aria-label="Checkout graphcms">
          graphcms
        </Link>{' '}
        & deployed to{' '}
        <Link isExternal href={TECHS.VERCEL} aria-label="Checkout vercel">
          vercel
        </Link>
        .
      </p>

      <div className="links">
        <Link isExternal href={CONTACTS.GITHUB} aria-label="Checkout my Github">
          github
        </Link>
        <Link
          isExternal
          href={CONTACTS.LINKEDIN}
          aria-label="Checkout my LinkedIn"
        >
          linkedin
        </Link>
        <Link
          isExternal
          href={CONTACTS.INSTAGRAM}
          aria-label="Checkout my Instagram"
        >
          instagram
        </Link>
      </div>
    </FooterContainer>
  )
}
