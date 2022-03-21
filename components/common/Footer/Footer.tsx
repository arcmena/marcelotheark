import Link from '@components/elements/Link'

import { CONTACTS, TECHS } from '@constants/urls'

import { FooterContainer } from './styles'

export default function Footer() {
  return (
    <FooterContainer>
      <div className="divider" />

      <p>
        2022 © arcmena. This website was designed on{' '}
        <Link isExternal href={TECHS.FIGMA} aria-label="Check out figma">
          figma
        </Link>
        , developed with{' '}
        <Link isExternal href={TECHS.NEXTJS} aria-label="Check out nextjs">
          nextjs
        </Link>
        ,{' '}
        <Link isExternal href={TECHS.GRAPHCMS} aria-label="Check out graphcms">
          graphcms
        </Link>{' '}
        & deployed to{' '}
        <Link isExternal href={TECHS.VERCEL} aria-label="Check out vercel">
          vercel
        </Link>
        .
      </p>

      <div className="links">
        <Link
          isExternal
          href={CONTACTS.GITHUB}
          aria-label="Check out my Github"
        >
          github
        </Link>
        <Link
          isExternal
          href={CONTACTS.LINKEDIN}
          aria-label="Check out my LinkedIn"
        >
          linkedin
        </Link>
        <Link
          isExternal
          href={CONTACTS.INSTAGRAM}
          aria-label="Check out my Instagram"
        >
          instagram
        </Link>
      </div>
    </FooterContainer>
  )
}
