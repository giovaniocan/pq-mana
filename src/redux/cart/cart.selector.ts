import { RootState } from '../rootReducer'
import { createSelector } from '@reduxjs/toolkit'

const cartSelector = (state: RootState) => state.cartReducer.products

export const selectNumberOfProductsInCart = createSelector(
  [cartSelector],
  (products) => products.length,
)
