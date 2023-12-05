import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { roboto } from '../styles/fonts'

import { Provider } from 'react-redux'
import { store } from '../redux/store'

import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'
import { Skeleton } from '@/components/Skeleton'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function App({ Component, pageProps }: AppProps) {
  const persistor = persistStore(store)
  return (
    <main className={roboto.className}>
      <Provider store={store}>
        <PersistGate loading={<Skeleton />} persistor={persistor}>
          <ToastContainer />
          <Component {...pageProps} />
        </PersistGate>
      </Provider>
    </main>
  )
}
