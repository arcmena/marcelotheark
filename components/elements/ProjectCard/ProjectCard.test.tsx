import { screen } from '@testing-library/react'

import { setup } from '@utils/tests'

import ProjectCard from '.'

import { mockProjectCardProps } from './mocks'

describe(ProjectCard, () => {
  const { render } = setup(<ProjectCard {...mockProjectCardProps} />)

  describe('Rendering', () => {
    it('should render the <ProjectCard> component', () => {
      render()
      expect(screen.getByTestId('ProjectCard')).toBeInTheDocument()
    })
  })
})
