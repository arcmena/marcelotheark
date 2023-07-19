import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import Link from '../Link'

import { CONTACTS } from '@constants/urls'

import ProfileImage from './profile-image.png'

import * as gtag from '@lib/gtag'

import {
  ProfileCardContainer,
  ProfileCardLeftBorder,
  ProfileCardInner,
  ProfileCardPersonalInfo,
  ProfileCardLinks
} from './styles'

const trackClickSocial = (item: string) =>
  gtag.event({
    category: 'Social',
    action: 'click',
    label: `Social Profile Card - ${item}`
  })

export default function ProfileCard() {
  const { t } = useTranslation('common')

  return (
    <ProfileCardContainer>
      <ProfileCardLeftBorder />
      <ProfileCardInner>
        <Image
          src={ProfileImage}
          alt={t('avatar-alt')}
          width="60"
          height="60"
          layout="fixed"
        />
        <ProfileCardPersonalInfo>
          <h3>Marcelo Mena</h3>
          <ProfileCardLinks>
            <Link
              isExternal
              href={CONTACTS.GITHUB}
              aria-label={t('check-my-github')}
              onClick={() => trackClickSocial('Github')}
            >
              github
            </Link>
            <Link
              isExternal
              href={CONTACTS.LINKEDIN}
              aria-label={t('check-my-linkedin')}
              onClick={() => trackClickSocial('LinkedIn')}
            >
              linkedin
            </Link>
          </ProfileCardLinks>
        </ProfileCardPersonalInfo>
      </ProfileCardInner>
    </ProfileCardContainer>
  )
}
