import '../styles/globals.css'
import Head from 'next/head'
import {useEffect} from 'react'
export default function App({ Component, pageProps }) {
  useEffect(() => {
   // document.body.classList.add("dark")
  })
    return (
    <>
    <Head>
      </Head>
    <Component {...pageProps}/>
    </>
    )
  }