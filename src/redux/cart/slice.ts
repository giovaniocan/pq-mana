import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  teste: null,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    teste: (state, action) => {
      state.teste = action.payload
    },
  },
})

export const { teste } = cartSlice.actions

export default cartSlice.reducer
