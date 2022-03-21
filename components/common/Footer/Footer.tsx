import Link from '@components/elements/Link'

import { CONTACTS, TECHS } from '@constants/urls'

import * as gtag from '@lib/gtag'

import {
  FooterContainer,
  FooterDisclosure,
  FooterDivider,
  FooterLinks
} from './styles'

const trackClickSocial = (item: string) =>
  gtag.event({
    category: 'Social',
    action: 'click',
    label: `Social Footer - ${item}`
  })

export default function Footer() {
  return (
    <FooterContainer>
      <FooterDivider />

      <FooterDisclosure>
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
      </FooterDisclosure>

      <FooterLinks>
        <Link
          isExternal
          href={CONTACTS.GITHUB}
          aria-label="My Github account"
          onClick={() => trackClickSocial('Github')}
        >
          github
        </Link>
        <Link
          isExternal
          href={CONTACTS.LINKEDIN}
          aria-label="My LinkedIn account"
          onClick={() => trackClickSocial('LinkedIn')}
        >
          linkedin
        </Link>
        <Link
          isExternal
          href={CONTACTS.INSTAGRAM}
          aria-label="My Instagram account"
          onClick={() => trackClickSocial('Instagram')}
        >
          instagram
        </Link>
      </FooterLinks>
    </FooterContainer>
  )
}
