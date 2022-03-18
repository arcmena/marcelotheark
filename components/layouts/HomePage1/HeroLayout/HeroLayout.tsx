import { HeroContainer, TitleContainer } from './styles'

export default function HeroLayout() {
  return (
    <HeroContainer id="hero">
      <TitleContainer>
        <span className="white">Hello there!</span>
        <span className="gradient">Hello there!</span>
      </TitleContainer>

      <h1>
        I’m Marcelo and I’m a Front End Developer with passion for amazing user
        experiences! <br /> <br />
        Welcome to my corner on the internet! I’m glad you are here!
      </h1>
    </HeroContainer>
  )
}
