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
  ProjectCardTechnology,
  ProjectCardBody
} from './styles'
import Image from 'next/image'

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

export interface ProjectCardProps extends TProject {
  alternateSide: boolean
}

const ProjectCard = ({
  projectCover,
  title,
  appType,
  description,
  projectUrl,
  repoUrl,
  technologiesUsed,
  alternateSide
}: ProjectCardProps) => {
  const screenWidth = typeof window === 'undefined' ? 0 : window.innerWidth

  return (
    <ProjectCardContainer
      data-testid="ProjectCard"
      alternateSide={alternateSide}
    >
      {screenWidth > 768 && (
        <Image
          src={projectCover.url}
          blurDataURL={projectCover.url}
          alt={title}
          width={486}
          height={281}
          className="projectCover"
        />
      )}
      <ProjectCardBody alternateSide={alternateSide}>
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
      </ProjectCardBody>
    </ProjectCardContainer>
  )
}

export default ProjectCard
