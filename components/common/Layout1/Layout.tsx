import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { useRouter } from 'next/router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Header from '../Header1'
import Footer from '../Footer1'
import MobileMenu from '../Menu/MobileMenu'
import ContactsLayout from '../../layouts/ContactsLayout'

import { LayoutProps } from './types'

import { MainContainer } from './styles'

export default function Layout({ children }: LayoutProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const handleOpenMobileMenu = () => setIsMobileMenuOpen(true)
  const handleCloseMobileMenu = () => setIsMobileMenuOpen(false)

  const mobileMenuRef = useRef() as MutableRefObject<HTMLDivElement>

  const router = useRouter()

  useEffect(() => {
    router.events.on('hashChangeComplete', handleCloseMobileMenu)
    router.events.on('routeChangeComplete', handleCloseMobileMenu)

    return () => {
      router.events.off('hashChangeComplete', handleCloseMobileMenu)
      router.events.off('routeChangeComplete', handleCloseMobileMenu)
    }
  }, [router])

  useEffect(() => {
    if (isMobileMenuOpen) {
      disableBodyScroll(mobileMenuRef.current)
    } else {
      enableBodyScroll(mobileMenuRef.current)
    }
  }, [isMobileMenuOpen])

  return (
    <>
      <MobileMenu
        isMobileMenuOpen={isMobileMenuOpen}
        handleCloseMobileMenu={handleCloseMobileMenu}
        mobileMenuRef={mobileMenuRef}
      />

      <Header handleOpenMobileMenu={handleOpenMobileMenu} />

      <MainContainer>
        {children}
        <ContactsLayout id="contacts" />
      </MainContainer>

      <Footer />
    </>
  )
}
