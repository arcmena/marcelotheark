import { ReactNode } from 'react'

import { PageTitleContainer } from './styles'

const PageTitle = ({ children }: { children: ReactNode }) => {
  return (
    <PageTitleContainer data-testid="PageTitle">{children}</PageTitleContainer>
  )
}

export default PageTitle
