import { ChakraProvider } from '@chakra-ui/react'
import theme from '../styles/theme'
import Layout from '../components/layout/layout.js'


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  );
}

export default MyApp