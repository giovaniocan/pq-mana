import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'

import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import { rootReducer } from './rootReducer'

const persistConfig = {
  // para salvar as configurações do persit
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer) // estamos falando que essas configuracoes e aplicam ao rootReducer que ja criamos e que esta os nossos reducers

const customizedMidleware = getDefaultMiddleware({
  // configuração
  serializableCheck: false,
})

export const store = configureStore({
  reducer: persistedReducer,
  middleware: customizedMidleware, // para nao quebrar
})
