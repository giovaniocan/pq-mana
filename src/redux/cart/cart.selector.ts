// cart.selector.ts

import { RootState } from '../rootReducer'
import { createSelector } from '@reduxjs/toolkit'

const cartSelector = (state: RootState) => state.cartReducer.products

export const selectNumberOfProductsInCart = createSelector(
  [cartSelector],
  (products) => (products ? products.length : 0),
)

export const selectTotalPrice = createSelector([cartSelector], (products) =>
  products
    ? products
        .reduce((acc, product) => acc + product.price * product.quantity, 0)
        .toFixed(2)
    : 0,
)
