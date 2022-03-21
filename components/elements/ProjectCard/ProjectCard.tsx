import ExternalLink from '../Icons/ExternalLink'
import Github from '../Icons/Github'
import Sparkles from '../Icons/Sparkles'
import Link from '../Link'

import { TProject } from '@graphql/schema'

import * as gtag from '@lib/gtag'

import {
  ProjectCardContainer,
  ProjectCardHeader,
  ProjectCardInfo,
  ProjectCardTitle,
  ProjectCardLinks,
  ProjectCardCategory,
  ProjectCardDescription,
  ProjectCardTechnologies,
  ProjectCardTechnologiesList,
  ProjectCardTechnology
} from './styles'

const trackClick = (title: string, type: string) =>
  gtag.event({
    category: 'Project',
    action: 'click',
    label: `Project Card - ${title} to see ${type}`
  })

const cardLinksIconProps = {
  width: 30,
  height: 30
}

const cardTechnologiesIconProps = {
  width: 24,
  height: 24,
  minWidth: 24,
  minHeight: 24
}

const ProjectCard = ({ title, description, url }: TProject) => {
  return (
    <ProjectCardContainer data-testid="ProjectCard">
      <ProjectCardHeader>
        <ProjectCardInfo>
          <ProjectCardTitle>{title}</ProjectCardTitle>
          <ProjectCardCategory>Chat app</ProjectCardCategory>
        </ProjectCardInfo>

        <ProjectCardLinks>
          <Link
            isExternal
            href={url}
            aria-label="Check out the live project"
            onClick={() => trackClick(title, 'Live Project')}
          >
            <ExternalLink {...cardLinksIconProps} />
          </Link>
          <Link
            isExternal
            href={url}
            aria-label="Go to the github Repository"
            onClick={() => trackClick(title, 'Git Repo')}
          >
            <Github {...cardLinksIconProps} />
          </Link>
        </ProjectCardLinks>
      </ProjectCardHeader>

      <ProjectCardDescription>{description}</ProjectCardDescription>

      <ProjectCardTechnologies>
        <Sparkles {...cardTechnologiesIconProps} />

        <ProjectCardTechnologiesList>
          <ProjectCardTechnology>React</ProjectCardTechnology>
          <ProjectCardTechnology>Graphql</ProjectCardTechnology>
          <ProjectCardTechnology>Subscriptions</ProjectCardTechnology>
        </ProjectCardTechnologiesList>
      </ProjectCardTechnologies>
    </ProjectCardContainer>
  )
}

export default ProjectCard
