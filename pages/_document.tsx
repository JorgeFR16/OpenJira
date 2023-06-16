import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />
        {/* La linea de arriba es para poder cambiar el font de la letra a roboto en toda la app */}
        <link rel="shortcut icon" href="/favicon.ico" />
        {/* el codigo de arriba es para poder cambiar el icono de la app si es que se quiere */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
