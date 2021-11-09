import SectionTitle from '../../../elements/SectionTitle'
import ProjectItem from '../../../elements/ProjectsLayout/ProjectItem'

import { ProjectsContainer, ProjectsWrapper } from './styles'

const projects = [
  {
    title: 'Arctichat',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: ''
  },
  {
    title: 'Grocewrapp',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: ''
  },
  {
    title: 'Moview Reviewer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    href: ''
  }
]

export default function ProjectsLayout() {
  return (
    <ProjectsContainer>
      <SectionTitle icon="lightning-bolt" title="projects" />

      <ProjectsWrapper>
        {projects.map(info => (
          <ProjectItem key={info.title} {...info} />
        ))}
      </ProjectsWrapper>
    </ProjectsContainer>
  )
}
