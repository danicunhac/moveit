import { AppProps } from "next/app";

import { ChallengesProvider } from "../context/ChallengesContext";
import { CountdownProvider } from "../context/CountdownContext";

import GlobalStyle from "../styles/global";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChallengesProvider>
      <Component {...pageProps} />
      <GlobalStyle />
    </ChallengesProvider>
  );
};

export default App;
