import { AppProps } from 'next/app';

import GlobalStyle from '../styles/global';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Component {...pageProps} />
      <GlobalStyle />
    </>
  );
};

export default App;
