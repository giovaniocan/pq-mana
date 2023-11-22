import { RootState } from '../rootReducer'
import { createSelector } from '@reduxjs/toolkit'

const cartSelector = (state: RootState) => state.cartReducer.products

export const selectNumberOfProductsInCart = createSelector(
  [cartSelector],
  (products) => products.length,
)

export const selectTotalPrice = createSelector([cartSelector], (products) =>
  products.reduce((acc, product) => acc + product.price * product.quantity, 0),
)
