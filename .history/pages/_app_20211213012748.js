import '../styles/globals.css';
import {SectionProvider} from '../context/SectionContext';

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
