import { screen } from '@testing-library/react'

import { setup } from '@utils/tests'

import PageTitle from '.'

describe(PageTitle, () => {
  const { render } = setup(<PageTitle label="Test Page" />)

  describe('Rendering', () => {
    it('should render the <PageTitle> component', () => {
      render()
      expect(screen.getByTestId('PageTitle')).toBeInTheDocument()
    })
  })
})
