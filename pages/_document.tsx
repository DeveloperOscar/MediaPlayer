import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head />
      <body className="bg-[url('/img/pattern.png')] bg-fixed bg-[length:8rem]">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
