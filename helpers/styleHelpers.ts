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

export const marginY = (size: string) => css`
  margin-top: ${size};
  margin-bottom: ${size};
`

export const marginZ = (size: string) => css`
  margin-left: ${size};
  margin-right: ${size};
`

export const paddingY = (size: string) => css`
  padding-top: ${size};
  padding-bottom: ${size};
`

export const paddingZ = (size: string) => css`
  padding-left: ${size};
  padding-right: ${size};
`
