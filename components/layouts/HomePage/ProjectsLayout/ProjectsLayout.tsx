import SectionTitle from '../../../elements/SectionTitle'
import ProjectItem from '../../../elements/ProjectsLayout/ProjectItem'

import { ProjectsContainer, ProjectsWrapper } from './styles'
import { ProjectsLayoutProps } from './types'

export default function ProjectsLayout({ projects }: ProjectsLayoutProps) {
  return (
    <ProjectsContainer id="projects">
      <SectionTitle icon="lightning-bolt" title="projects" />

      <ProjectsWrapper>
        {projects.map(info => (
          <ProjectItem key={info.title} {...info} />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
