/* eslint-disable testing-library/no-unnecessary-act */
/* eslint-disable testing-library/render-result-naming-convention */
import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'

import cart from '@/redux/cart/slice'
import { Provider } from 'react-redux'
import { CardCart } from './CardCart'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

const product2 = {
  id: 2,
  name: 'Pão de Queijo de Balde 4 Kg',
  image: '/balde4Kg.jpg',
  tags: ['1 e 2Kg', 'delicioso'],
  description: 'Praticidade excepcional em 4kg. Sabor abundante.',
  price: 9.9,
  quantity: 3,
}
const product1 = {
  id: 1,
  name: 'Pão de Queijo de Pote 1 Kg',
  image: '/Pote1Kg.jpg',
  tags: ['1 e 2Kg', 'gostoso'],
  description: 'Sabor irresistível em 1kg. Praticidade única.',
  price: 9.9,
  quantity: 2,
}
describe('Card Cart Componente', () => {
  let Mockstore: EnhancedStore<RootState>
  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
      preloadedState: {
        cart: {
          // Defina o estado inicial do carrinho com produtos
          products: [product1, product2],
        },
      },
    })
  })

  const RenderComponent = () => {
    return (
      <Provider store={Mockstore}>
        <CardCart product={product1} />
      </Provider>
    )
  }
  it('Should renders CardCart component without errors', () => {
    render(<RenderComponent />)
  })

  it('Should product details correctly', () => {
    render(<RenderComponent />)

    const name = screen.getByText(product1.name)
    const quantity = screen.getByRole('quantity-display')
    const price = screen.getByRole('total-price-of-the-product')

    expect(name).toBeVisible()
    expect(quantity).toHaveTextContent(product1.quantity.toString())
    expect(price).toBeVisible()
  })

  it('Should show the right amount of the quantity', async () => {
    render(<RenderComponent />)

    const quantity = screen.getByRole('quantity-display')

    expect(quantity).toHaveTextContent(product1.quantity.toString())

    const incrementButton = screen.getByRole('increment-button')
    const subtractButton = screen.getByRole('subtract-button')

    fireEvent.click(incrementButton)

    await waitFor(() => {
      expect(quantity).toHaveTextContent((product1.quantity + 1).toString())
    })

    fireEvent.click(subtractButton)
    // Usando waitFor para aguardar a próxima renderização antes de verificar
    await waitFor(() => {
      expect(quantity).toHaveTextContent(product1.quantity.toString())
    })
  })

  it('Should call the removeProduct in redux', async () => {
    render(<RenderComponent />)

    const removeButton = screen.getByRole('remove-button')

    await act(async () => {
      await userEvent.click(removeButton)
    })

    const state = Mockstore.getState().cart.products
    expect(state).toHaveLength(1)
  })

  it('Should show the right price of that product', () => {
    render(<RenderComponent />)

    const price = screen.getByRole('total-price-of-the-product')
    console.log(price)
    expect(price).toHaveTextContent(
      (product1.quantity * product1.price).toString(),
    )
  })
})
