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
  minwidth: 24,
  minheight: 24
}

const ProjectCard = ({
  title,
  appType,
  description,
  projectUrl,
  repoUrl,
  technologiesUsed
}: TProject) => {
  return (
    <ProjectCardContainer data-testid="ProjectCard">
      <ProjectCardHeader>
        <ProjectCardInfo>
          <ProjectCardTitle>{title}</ProjectCardTitle>
          <ProjectCardCategory>{appType}</ProjectCardCategory>
        </ProjectCardInfo>

        <ProjectCardLinks>
          {projectUrl && (
            <Link
              isExternal
              href={projectUrl}
              aria-label="Check out the live project"
              onClick={() => trackClick(title, 'Live Project')}
            >
              <ExternalLink {...cardLinksIconProps} />
            </Link>
          )}
          {repoUrl && (
            <Link
              isExternal
              href={repoUrl}
              aria-label="Go to the github Repository"
              onClick={() => trackClick(title, 'Git Repo')}
            >
              <Github {...cardLinksIconProps} />
            </Link>
          )}
        </ProjectCardLinks>
      </ProjectCardHeader>

      <ProjectCardDescription>{description}</ProjectCardDescription>

      <ProjectCardTechnologies>
        <Sparkles {...cardTechnologiesIconProps} />

        <ProjectCardTechnologiesList>
          {technologiesUsed.map(tech => (
            <ProjectCardTechnology key={tech}>{tech}</ProjectCardTechnology>
          ))}
        </ProjectCardTechnologiesList>
      </ProjectCardTechnologies>
    </ProjectCardContainer>
  )
}

export default ProjectCard
