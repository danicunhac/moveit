import Document, {
  Head,
  Main,
  NextScript,
  Html,
  DocumentProps,
} from "next/document";
import { ServerStyleSheet } from "styled-components";

interface PropsData extends DocumentProps {
  styleTags: Object;
}
export default class MyDocument extends Document<PropsData> {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();

    const page = renderPage((App) => (props) =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="/favicon.png" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Rajdhani:wght@600&display=swap"
            rel="stylesheet"
          />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
