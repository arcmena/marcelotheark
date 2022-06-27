import snarkdown from 'snarkdown'

import PageTitle from '@components/elements/PageTitle'

import { TMyIntroduction } from '@graphql/schema'

import { IntroductionContainer, ExperienceHistoryContainer } from './styles'

interface IntroductionProps {
  content: TMyIntroduction
}

const Introduction = (props: IntroductionProps) => {
  const { content } = props
  const { introduction, experienceHistory } = content

  return (
    <IntroductionContainer data-testid="Introduction">
      <PageTitle
        dangerouslySetInnerHTML={{
          __html: snarkdown(introduction)
        }}
      />
      <ExperienceHistoryContainer
        dangerouslySetInnerHTML={{
          __html: snarkdown(experienceHistory)
        }}
      />
    </IntroductionContainer>
  )
}

export default Introduction
