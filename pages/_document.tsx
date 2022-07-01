import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'

class CustomDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render() {
    return (
        <Html lang="it">
          <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'}/>
            <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;700&display=swap"
                  rel="stylesheet"/>
          </Head>
          <body>
          <Main/>
          <NextScript/>
          </body>
        </Html>
    )
  }
}

export default CustomDocument