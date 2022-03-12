import { ReactNode } from 'react'

import Header from '../Header'
import Footer from '../Footer'

import { LayoutContainer } from './styles'

interface LayoutProps {
  children: ReactNode
}

export default function NewLayout({ children }: LayoutProps) {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <Footer />
    </LayoutContainer>
  )
}
