import { render, RenderResult } from '@testing-library/react'
import { Component } from 'react'
import { ThemeProvider } from 'styled-components'

import theme from '@styles/theme'

type SetupFunction = (Component: JSX.Element) => {
  render: () => RenderResult
}

export const setup: SetupFunction = Component => ({
  render: () => render(<ThemeProvider theme={theme}>{Component}</ThemeProvider>)
})
