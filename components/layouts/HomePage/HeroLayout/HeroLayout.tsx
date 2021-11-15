import { HeroContainer, TitleContainer } from './styles'

export default function HeroLayout() {
  return (
    <HeroContainer id="hero">
      <TitleContainer>
        <h2 className="white">Hello there!</h2>
        <h2 className="gradient">Hello there!</h2>
      </TitleContainer>

      <p>
        I’m Marcelo and I’m a Front End Developer with passion for amazing user
        experiences! <br /> <br />
        Welcome to my corner on the internet! I’m glad you are here!
      </p>
    </HeroContainer>
  )
}
