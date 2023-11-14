import '@/styles/globals.css'
import type { AppProps } from 'next/app'
 import {roboto} from '../styles/fonts'
 
export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
    <Component {...pageProps} />
  </main>
  )
}
