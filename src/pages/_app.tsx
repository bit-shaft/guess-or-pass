/** pacakges */
import { AppProps } from 'next/app';

/** main */
function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

/** exports */
export default App;
