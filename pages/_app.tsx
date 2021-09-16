import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import SearchProvider from '../context/searchContext'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <SearchProvider>
        <Component {...pageProps} />
      </SearchProvider>
    </ApolloProvider>
  )
  
}
export default MyApp
