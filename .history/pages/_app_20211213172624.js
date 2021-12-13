import '../styles/globals.css';
import { SessionProvider } from "next-auth/react";

function MyApp({ Component, pageProps: {session, ...pageProps} }) {
  return(
    <SessionProvider session={session}>
    <Component {...pageProps} />
    <Recoi
  </SessionProvider>
  )
}
  export default MyApp
