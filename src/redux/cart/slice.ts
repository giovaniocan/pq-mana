import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number
  name: string
  image: string
  tags: string[]
  description: string
  price: number
  quantity: number
}

interface CartState {
  products: Product[]
}

const initialState: CartState = {
  products: [],
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addProductToCart: (state, action: PayloadAction<Product>) => {
      const product = action.payload

      const productIsAlreadyInCart = state.products.some(
        (prod) => prod.id === product.id,
      )

      if (productIsAlreadyInCart) {
        state.products = state.products.map((prod) =>
          prod.id === product.id
            ? { ...prod, quantity: prod.quantity + product.quantity }
            : prod,
        )
      } else {
        state.products = [...state.products, product]
      }
    },
  },
})

export const { addProductToCart } = cartSlice.actions

export default cartSlice.reducer
