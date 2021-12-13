import '../styles/globals.css';
import {SectionProvider} from "next-auth"

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
