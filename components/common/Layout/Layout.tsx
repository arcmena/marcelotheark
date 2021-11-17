import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { useRouter } from 'next/router'
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock'

import Header from '../Header'
import Footer from '../Footer'
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

    return () => {
      router.events.off('hashChangeComplete', handleCloseMobileMenu)
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

      <MainContainer>{children}</MainContainer>

      <ContactsLayout id="contacts" />

      <Footer />
    </>
  )
}
