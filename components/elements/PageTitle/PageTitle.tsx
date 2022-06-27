import { ReactNode } from 'react'

import { PageTitleContainer } from './styles'

const PageTitle = ({
  children,
  dangerouslySetInnerHTML
}: {
  children?: ReactNode
  dangerouslySetInnerHTML?: {
    __html: string
  }
}) => {
  return (
    <PageTitleContainer
      data-testid="PageTitle"
      dangerouslySetInnerHTML={dangerouslySetInnerHTML}
    >
      {children}
    </PageTitleContainer>
  )
}

export default PageTitle
