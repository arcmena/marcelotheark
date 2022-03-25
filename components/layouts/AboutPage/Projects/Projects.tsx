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
