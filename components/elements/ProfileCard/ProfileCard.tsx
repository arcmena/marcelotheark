import Image from 'next/image'

import Link from '../Link'

import { CONTACTS } from '@constants/urls'

import ProfileImage from './profile-image.png'

import {
  ProfileCardContainer,
  ProfileCardLeftBorder,
  ProfileCardInner,
  ProfileCardPersonalInfo,
  ProfileCardLinks
} from './styles'

export default function ProfileCard() {
  return (
    <ProfileCardContainer>
      <ProfileCardLeftBorder />
      <ProfileCardInner>
        <Image
          src={ProfileImage}
          alt="Marcelo Mena 80s style avatar"
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
          </ProfileCardLinks>
        </ProfileCardPersonalInfo>
      </ProfileCardInner>
    </ProfileCardContainer>
  )
}
