import Github from '../../Icons/Github'

import {
  ProjectItemContainer,
  ProjectItemDescription,
  ProjectItemTitle
} from './styles'

const iconProps = {
  width: 16,
  height: 16
}

interface ProjectItemProps {
  title: string
  description: string
  href: string
}

export default function ProjectItem({
  title,
  description,
  href
}: ProjectItemProps) {
  return (
    <ProjectItemContainer href={href} target="_blank" rel="noopener">
      <ProjectItemTitle>
        <h2>{title}</h2>

        <Github {...iconProps} />
      </ProjectItemTitle>

      <hr />

      <ProjectItemDescription>
        <p>{description}</p>
      </ProjectItemDescription>
    </ProjectItemContainer>
  )
}
