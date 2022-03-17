import { ReactNode } from 'react'
import { PageTitleContainer } from './styles'

const PageTitle = ({ label }: { label: string | ReactNode }) => {
  return (
    <PageTitleContainer data-testid="PageTitle">{label}</PageTitleContainer>
  )
}

export default PageTitle
