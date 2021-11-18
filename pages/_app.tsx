import { useEffect } from 'react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'

import GoogleAnalytics from '../components/common/GoogleAnalytics/GoogleAnalytics'
import Layout from '../components/common/Layout'

import * as gtag from '../lib/gtag'

import GlobalStyles from '../styles/global'
import theme from '../styles/theme'

declare global {
  interface Window {
    gtag: any
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageView(url)
    }

    router.events.on('routeChangeComplete', handleRouteChange)

    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      <GoogleAnalytics />

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  )
}

export default MyApp
