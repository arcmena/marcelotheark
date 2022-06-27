import { useTranslation } from 'next-i18next'

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
  const { t } = useTranslation('common')

  return (
    <FooterContainer>
      <FooterDivider />

      <FooterDisclosure>
        2022 © arcmena. {t('website-designed-on')}{' '}
        <Link isExternal href={TECHS.FIGMA} aria-label="Check out figma">
          figma
        </Link>
        , {t('developed-with')}{' '}
        <Link isExternal href={TECHS.NEXTJS} aria-label="Check out nextjs">
          nextjs
        </Link>
        ,{' '}
        <Link isExternal href={TECHS.GRAPHCMS} aria-label="Check out graphcms">
          graphcms
        </Link>{' '}
        & {t('deployed-to')}{' '}
        <Link isExternal href={TECHS.VERCEL} aria-label="Check out vercel">
          vercel
        </Link>
        .
      </FooterDisclosure>

      <FooterLinks>
        <Link
          isExternal
          href={CONTACTS.GITHUB}
          aria-label={t('my-github-account')}
          onClick={() => trackClickSocial('Github')}
        >
          github
        </Link>
        <Link
          isExternal
          href={CONTACTS.LINKEDIN}
          aria-label={t('my-linkedin-account')}
          onClick={() => trackClickSocial('LinkedIn')}
        >
          linkedin
        </Link>
        <Link
          isExternal
          href={CONTACTS.INSTAGRAM}
          aria-label={t('my-instagram-account')}
          onClick={() => trackClickSocial('Instagram')}
        >
          instagram
        </Link>
      </FooterLinks>
    </FooterContainer>
  )
}
