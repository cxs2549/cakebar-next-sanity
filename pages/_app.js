/* eslint-disable @next/next/no-page-custom-font */
import Header from "../components/Header/MyHeader"
import "../styles/globals.css"
import Head from "next/head"
import { StateContext } from "../context/StateContext"
import { Toaster } from "react-hot-toast"
import { AnimatePresence } from "framer-motion"

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Head>
        <title>Cake Bar</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <StateContext>
        <Header />
        <Toaster />
        <AnimatePresence
          mode="wait"
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Component {...pageProps} />
        </AnimatePresence>
      </StateContext>
    </div>
  )
}

export default MyApp
