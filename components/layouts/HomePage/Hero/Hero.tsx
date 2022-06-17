import snarkdown from 'snarkdown'

import { HeroContainer } from './styles'

export interface IHero {
  content: string
}

export default function Hero({ content }: IHero) {
  return (
    <HeroContainer dangerouslySetInnerHTML={{ __html: snarkdown(content) }} />
  )
}
