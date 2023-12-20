/* eslint-disable testing-library/await-async-events */
/* eslint-disable prettier/prettier */
/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/no-unnecessary-act */
import Checkout from '@/pages/checkout'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-11'
import { Provider } from 'react-redux'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'
import cart from '@/redux/cart/slice'
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
      preloadedState: {
        cart: {
          // Defina o estado inicial do carrinho com produtos
          products: [product1, product2],
        },
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

  it('Should go back to home page when clicks the back button', async () => {
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

  it('Should send submitForm to finish the order', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Checkout />
        </MemoryRouterProvider>
      </Provider>,
    )

    const mockName = 'Giovani'
    const mockPhone = '123456789'
    const mockAddress = 'Rua da Amostra, 123'
    const mockCity = 'Cidade Exemplo'
    const mockCep = '12345678'
    const mockNumber = '42'
    const mockPaymentMethod = 'pix'

    const nameField = screen.getByRole('name-input')
    const phoneField = screen.getByRole('phone-input')
    const addressField = screen.getByRole('address-input')
    const cityField = screen.getByRole('city-input')
    const cepField = screen.getByRole('cep-input')
    const numberField = screen.getByRole('number-input')
    const paymentMethod = screen.getByRole(
      `payment-option-${mockPaymentMethod}`,
    )

    const button = screen.getByRole('confirm-bill')

    await act(async () => {
      await userEvent.type(nameField, mockName)
      await userEvent.type(phoneField, mockPhone)
      await userEvent.type(addressField, mockAddress)
      await userEvent.type(cityField, mockCity)
      await userEvent.type(cepField, mockCep)
      await userEvent.type(numberField, mockNumber)
       userEvent.click(paymentMethod)
       userEvent.click(button)
    })

    // Aguarde até que a navegação para "/success" seja despachada
    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith({
        pathname: '/success',
        query: {
          name: mockName,
          phone: mockPhone,
          address: mockAddress,
          city: mockCity,
          cep: mockCep,
          number: mockNumber,
          paymentMethod: mockPaymentMethod,
        },
      })
    })
  })
})
