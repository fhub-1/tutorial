//adding tailwindcss file
import "tailwindcss/tailwind.css"


function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} bg="blue"/>
}

export default MyApp
