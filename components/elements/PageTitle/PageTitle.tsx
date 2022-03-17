import { PageTitleContainer } from './styles'

const PageTitle = ({ label }: { label: string }) => {
  return (
    <PageTitleContainer data-testid="PageTitle">{label}</PageTitleContainer>
  )
}

export default PageTitle
