import type { AppProps } from 'next/app'

import GlobalStyles from '../styles/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import theme from '../styles/theme'
import NextNProgress from 'nextjs-progressbar'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress color="#02ff2c" startPosition={0.5} />
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
    </>
  )
}

export default MyApp
