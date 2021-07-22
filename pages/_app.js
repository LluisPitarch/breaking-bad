import '../styles/globals.css';
import '../styles/font.css';

import axios from 'axios';
import { Provider } from 'react-redux';
import configureStore from '../redux/store';

const store = configureStore();

axios.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL;
axios.defaults.headers.common['Content-Type'] = 'application/json';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
