import Checkout from '@/pages/checkout'
import { fireEvent, render, screen } from '@testing-library/react'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-11'
import { Provider } from 'react-redux'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'
import cart, { addProductToCart } from '@/redux/cart/slice'
import { act } from 'react-dom/test-utils'

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('Checkout Component', () => {
  let Mockstore: EnhancedStore<RootState>

  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
    })
    mockPush.mockClear()
  })

  it('Should render the Checkout page', () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Checkout />
        </MemoryRouterProvider>
      </Provider>,
    )
  })

  it('Should show the empty cart component when the cart is empty', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Checkout />
        </MemoryRouterProvider>
      </Provider>,
    )

    const emptyCartComponent = screen.getByRole('empty-cart')
    expect(emptyCartComponent).toBeVisible()
  })

  it('Shoul show the FormAddess and Summary Bill component when there are some products there', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Checkout />
        </MemoryRouterProvider>
      </Provider>,
    )

    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: '/Pote1Kg.jpg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }

    act(() => {
      Mockstore.dispatch(addProductToCart(product))
    })

    const empetyState = Mockstore.getState().cart.products.length
    expect(empetyState).toBe(1)

    const formComponent = screen.getByRole('form-addres')
    const CartComponent = screen.getByRole('summary-bill')

    expect(formComponent).toBeInTheDocument()
    expect(CartComponent).toBeInTheDocument()
  })

  it('Should went back to home page when clicks in back button', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Checkout />
        </MemoryRouterProvider>
      </Provider>,
    )

    const button = screen.getByRole('send-home-button')
    fireEvent.click(button)

    expect(mockPush).toHaveBeenCalledWith('/home')
  })
})
