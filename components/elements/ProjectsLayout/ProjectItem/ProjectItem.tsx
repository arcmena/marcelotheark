import Github from '../../Icons/Github'

import { ProjectItemProps } from './types'

import {
  ProjectItemContainer,
  ProjectItemDescription,
  ProjectItemTitle
} from './styles'

const iconProps = {
  width: 16,
  height: 16
}

export default function ProjectItem({
  title,
  description,
  url
}: ProjectItemProps) {
  return (
    <ProjectItemContainer
      href={url}
      target="_blank"
      rel="noopener"
      aria-label={title}
    >
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
