import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
}

export default App;
