//adding tailwindcss file
import "tailwindcss/tailwind.css"
import Head from "next/head"


function MyApp({ Component, pageProps }) {
  return (
    //monday adding same files and google fonts
    <>
      <Head>
       <link rel="preconnect" href="https://fonts.gstatic.com" />
       <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet" />
       <link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500;1,600;1,700&family=Source+Code+Pro:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600&display=swap" rel="stylesheet"  />
      </Head>
      <Component {...pageProps} />
      </>
  );
}

export default MyApp;
