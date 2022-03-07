import '../styles/globals.css'
import { NextUIProvider } from '@nextui-org/react';
import App from 'next/app'
import { store } from '../app/store'
import { Provider} from 'react-redux'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </Provider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  return { ...appProps };
};

export default MyApp;
