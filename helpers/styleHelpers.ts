import { css } from 'styled-components'

export const enforceIconSize = (size: string) => css`
  height: ${size};
  min-height: ${size};
  width: ${size};
  min-width: ${size};
`

export const gridLayout = ({
  columns,
  gap
}: {
  columns: number
  gap: string
}) => css`
  display: grid;
  grid-template-columns: repeat(${columns}, minmax(0, 1fr));
  gap: ${gap};
`
