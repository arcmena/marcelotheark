import ProjectCard from '@components/elements/ProjectCard'
import SectionTitle from '@components/elements/SectionTitle'

import { TProject } from '@graphql/schema'

import { ProjectsContainer, ProjectsDescription, ProjectsList } from './styles'

interface ProjectsProps {
  projects: Array<TProject>
}

const Projects = ({ projects }: ProjectsProps) => {
  return (
    <ProjectsContainer data-testid="Projects">
      <SectionTitle>Projects</SectionTitle>

      <ProjectsDescription>
        Some personal / freelancing projects I’ve been working on.
      </ProjectsDescription>

      <ProjectsList>
        {projects.map(project => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </ProjectsList>
    </ProjectsContainer>
  )
}

export default Projects
