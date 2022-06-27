import { useTranslation } from 'next-i18next'

import ProjectCard from '@components/elements/ProjectCard'
import SectionTitle from '@components/elements/SectionTitle'

import { TProject } from '@graphql/schema'

import { ProjectsContainer, ProjectsDescription, ProjectsList } from './styles'

export interface ProjectsProps {
  projects: Array<TProject>
}

const Projects = ({ projects }: ProjectsProps) => {
  const { t } = useTranslation('common')

  return (
    <ProjectsContainer data-testid="Projects">
      <SectionTitle>{t('projects')}</SectionTitle>

      <ProjectsDescription>
        {t('projects-description')}
      </ProjectsDescription>

      <ProjectsList>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            alternateSide={(index + 1) % 2 === 0}
            {...project}
          />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  )
}

export default Projects
