import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  id: number
  name: string
  image: string
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
    addProductToCart: (state, { payload }: PayloadAction<Product>) => {
      const product = payload

      if (payload.quantity === 0) {
        throw new Error('A quantidade não pode ser zero')
      }

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

    removeProductFromCart: (state, { payload }: PayloadAction<number>) => {
      state.products = state.products.filter(
        (product) => product.id !== payload,
      )
    },

    increaseProductQuantity: (state, { payload }: PayloadAction<number>) => {
      state.products = state.products.map((product) =>
        product.id === payload
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      )
    },
    decreaseProductQuantity: (state, { payload }: PayloadAction<number>) => {
      const product = state.products.find((product) => product.id === payload)

      if (product) {
        if (product.quantity > 1) {
          state.products = state.products.map((product) =>
            product.id === payload
              ? { ...product, quantity: product.quantity - 1 }
              : product,
          )
        } else {
          state.products = state.products.filter(
            (product) => product.id !== payload,
          )
        }
      }
    },

    cleanCart: (state) => {
      state.products = []
    },
  },
})

export const {
  addProductToCart,
  removeProductFromCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  cleanCart,
} = cartSlice.actions

export default cartSlice.reducer
