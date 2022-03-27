import { screen } from '@testing-library/react'

import { setup } from '@utils/tests'

import Input from '.'

describe(Input, () => {
  const { render } = setup(<Input name="testInput" />)

  describe('Rendering', () => {
    it('should render the <Input> component', () => {
      render()
      expect(screen.getByTestId('Input-testInput')).toBeInTheDocument()
    })
  })
})
