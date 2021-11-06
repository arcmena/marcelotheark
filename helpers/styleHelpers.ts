import { css } from 'styled-components'

export const enforceIconSize = (size: string) => css`
  height: ${size};
  min-height: ${size};
  width: ${size};
  min-width: ${size};
`
