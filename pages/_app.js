import '../styles/globals.css'
import Head from 'next/head'
export default function App({ Component, pageProps }) {
    return (
    <>
    <Head>
        <style>{`
          body { 
            background-color: #1F2937; /* Tailwind's dark:bg-gray-800 */
            color: #F9FAFB; /* Tailwind's text-white */
          }
        `}</style>
      </Head>
    <Component {...pageProps} />
    </>
    )
  }