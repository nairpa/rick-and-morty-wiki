import '../styles/globals.css'
import { ApolloProvider } from '@apollo/client'
import client from '../apollo/client'
import { store  } from '../redux/store'
import { Provider } from 'react-redux'
import { SidebarComponent } from '../components/sidebarComponent/sidebarComponent'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
        <Provider store={store}>
          <SidebarComponent />
          <Component {...pageProps} />
        </Provider>
    </ApolloProvider>
  )
  
}
export default MyApp
