import { Html, Head, Main, NextScript } from 'next/document'

/**
 * The main document component that serves as the base HTML document for the Next.js application.
 *  The HTML document with the necessary meta tags and links.
 */
export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="peticure-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fe4880" />
      </Head>
      <body className='relative'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
