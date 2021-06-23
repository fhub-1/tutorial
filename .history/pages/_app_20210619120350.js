import '../styles/globals.css'
//adding tailwindcss file
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp