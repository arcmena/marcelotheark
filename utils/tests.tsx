import { render, RenderResult } from '@testing-library/react'
import React from 'react'

type SetupFunction = (
  Component: React.ComponentType,
  config?: { initialProps?: React.ComponentProps<any> }
) => {
  render: (props?: React.ComponentProps<any>) => RenderResult
}

export const setup: SetupFunction = (
  Component,
  { initialProps = {} } = {}
) => ({
  render: (props = {}) => render(<Component {...initialProps} {...props} />)
})
