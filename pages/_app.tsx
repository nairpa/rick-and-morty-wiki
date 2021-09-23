import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import { store  } from '../redux/store'
import { Provider } from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
    </ApolloProvider>
  )
  
}
export default MyApp
