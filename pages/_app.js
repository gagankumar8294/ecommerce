// pages/_app.js
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Layout from '../comps/navbar/Layout'
import '../styles/globals.css'
import '../styles/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  )
}

export default MyApp