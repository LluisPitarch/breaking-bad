import Head from 'next/head';

import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

import { AnimatePresence } from 'framer-motion';
import { ToastContainer } from 'react-toastify';

import '../styles/globals.css';
import '../styles/font.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-toastify/dist/ReactToastify.css';

const store = configureStore();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Head>
        <title>Breaking Bad Project | Lluis Pitarch</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <AnimatePresence exitBeforeEnter>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={8000}
          hideProgressBar={false}
          newestOnTop={false}
          draggable={false}
          pauseOnVisibilityChange
          closeOnClick
          pauseOnHover
        />
      </AnimatePresence>
    </Provider>
  );
}

export default MyApp;
