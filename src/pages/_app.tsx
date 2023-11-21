import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '../styles/fonts'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  )
}
