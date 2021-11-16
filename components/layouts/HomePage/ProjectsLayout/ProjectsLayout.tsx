import SectionTitle from '../../../elements/SectionTitle'
import ProjectItem from '../../../elements/ProjectsLayout/ProjectItem'

import { ProjectsLayoutProps } from './types'

import { ProjectsContainer, ProjectsWrapper } from './styles'

export default function ProjectsLayout({ projects }: ProjectsLayoutProps) {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle icon="lightning-bolt" title="projects" />

      <ProjectsWrapper>
        {projects.map(info => (
          <ProjectItem key={info.id} {...info} />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
