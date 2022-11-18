import { Container } from '@/components/Container'
import { MantineProvider } from '@mantine/core'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" type="image/ico" href="/favicon.ico" />
        <meta name="robots" content="index, follow" />
        <title>Next Mantine</title>
      </Head>
      <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'light', fontFamily: 'Open Sans' }}>
        <Container>
          <Component {...pageProps} />
        </Container>
      </MantineProvider>
    </>
  )
}