import '../styles/globals.css'
import {AuthProvider} from '../contexts/auth'
import Layout from '../component/layout/Layout'

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
    </AuthProvider>
  )
}

export default MyApp
