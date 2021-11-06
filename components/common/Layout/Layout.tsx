import { ReactNode } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { MainContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <MainContainer>{children}</MainContainer>
      <Footer />
    </>
  )
}
