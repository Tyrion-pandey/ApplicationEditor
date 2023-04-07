import '@/styles/globals.css'
import {AuthProvider} from '../context/authContext';
import LayoutWrapper from '@/components/Layouts/LayoutWrapper';
import NProgress from 'nprogress';
import '../styles/nprogress.css';
import { Provider } from 'react-redux';
import { wrapper, store } from '@/store/store';

import Router from 'next/router';

Router.events.on('routeChangeStart', (url) => {
    console.log(`Loading: ${url}`);
    NProgress.start();
});

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());



function App({ Component, pageProps }) {
  return (
  <AuthProvider>
    <LayoutWrapper>
      <Provider store={store}>
    <Component {...pageProps} />
    </Provider>
    </LayoutWrapper>
  </AuthProvider>
  
  )
}

export default wrapper.withRedux(App);
