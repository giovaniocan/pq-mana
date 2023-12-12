/* eslint-disable testing-library/no-unnecessary-act */
import { Cards } from '@/utils/CardsContent'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'

import { ProductCard } from './ProductCard'

import { Provider } from 'react-redux'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'

import cart from '@/redux/cart/slice'

import '@testing-library/jest-dom/extend-expect'

describe('Product Card Component', () => {
  let Mockstore: EnhancedStore<RootState>
  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
    })
  })
  it('Should render the ProductCard component', () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const productCard = screen.getByRole('productItem')
    expect(productCard).toBeInTheDocument()
  })

  it('Should render the correct product data', () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const name = screen.getByText(Cards[0].name)
    expect(name).toBeInTheDocument()

    const price = screen.getByText(Cards[0].price.toFixed(2))
    expect(price).toBeInTheDocument()

    const description = screen.getByText(Cards[0].description)
    expect(description).toBeInTheDocument()
  })

  it('should incremets and decrements de selected quantity', async () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const incrementButton = screen.getByRole('increment-button')
    const subtractButton = screen.getByRole('subtract-button')
    const counter = screen.getByText('0')

    fireEvent.click(incrementButton)

    await waitFor(() => {
      expect(counter).toHaveTextContent('1')
    })

    fireEvent.click(subtractButton)
    // Usando waitFor para aguardar a próxima renderização antes de verificar
    await waitFor(() => {
      expect(counter).toHaveTextContent('0')
    })
  })

  it('Should not allow the quantity to be negative', async () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const subtractButton = screen.getByRole('subtract-button')

    fireEvent.click(subtractButton)

    const quantity = screen.getByRole('quantity-display')

    await waitFor(() => {
      expect(quantity).toHaveTextContent('0')
    })
  })

  it('Should add the product in cart when click in the right button', async () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    // Simular o clique no botão de incremento
    const incrementButton = screen.getByRole('increment-button')
    fireEvent.click(incrementButton)

    // Obter o número de itens no carrinho antes do clique no botão "add-to-cart"
    const initialCartCount = Mockstore.getState().cart.products.length

    // Simular o clique no botão "add-to-cart"
    const button = screen.getByRole('add-to-cart')
    await act(async () => {
      fireEvent.click(button)
    })

    // Verificar se o número de itens no carrinho aumentou
    const finalCartCount = Mockstore.getState().cart.products.length
    expect(finalCartCount).toBeGreaterThan(initialCartCount)
  })

  it('Should not add the product when the quantity it is smaller than 1', async () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )
    const initialCartCount = Mockstore.getState().cart.products.length

    const button = screen.getByRole('add-to-cart')
    await act(async () => {
      fireEvent.click(button)
    })

    const finalCartCount = Mockstore.getState().cart.products.length
    expect(finalCartCount).toEqual(initialCartCount)
  })

  it('Should reset the quantity when click in the button', async () => {
    render(
      <Provider store={Mockstore}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const counter = screen.getByText('0')
    // Simular o clique no botão de incremento
    const incrementButton = screen.getByRole('increment-button')
    fireEvent.click(incrementButton)

    expect(counter).toHaveTextContent('1')

    // Simular o clique no botão "add-to-cart"
    const button = screen.getByRole('add-to-cart')
    await act(async () => {
      fireEvent.click(button)
    })

    expect(counter).toHaveTextContent('0')
  })
})
