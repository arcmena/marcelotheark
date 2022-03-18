import Image from 'next/image'

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
            <a href="">github</a>
            <a href="">linkedin</a>
            <a href="">instagram</a>
          </ProfileCardLinks>
        </ProfileCardPersonalInfo>
      </ProfileCardInner>
    </ProfileCardContainer>
  )
}
