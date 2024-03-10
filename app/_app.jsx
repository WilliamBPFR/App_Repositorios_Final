import Head from 'next/head';
import dotenv from 'dotenv';



function MyApp({ Component, pageProps }) {
  dotenv.config();
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