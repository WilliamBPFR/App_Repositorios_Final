import Head from 'next/head';

function MyApp({ Component, pageProps }) {
    return (
      <>
        <Head>
        <link
            rel="icon"
            href="icon?<generated>"
            type="image/<generated>"
            sizes="<generated>"
        />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
  
  export default MyApp;