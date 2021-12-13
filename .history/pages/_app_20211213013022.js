import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {s} }) {
  return
  <SessionProvider>
    <Component {...pageProps} />
  </SessionProvider>
}
  export default MyApp
