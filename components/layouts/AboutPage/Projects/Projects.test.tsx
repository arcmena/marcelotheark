import { screen } from '@testing-library/react'

import { setup } from '@utils/tests'

import Projects from '.'

import { mockProjectsProps } from './mocks'

describe(Projects, () => {
  const { render } = setup(<Projects {...mockProjectsProps} />)

  describe('Rendering', () => {
    it('should render the <Projects> component', () => {
      render()
      expect(screen.getByTestId('Projects')).toBeInTheDocument()
    })
  })
})
