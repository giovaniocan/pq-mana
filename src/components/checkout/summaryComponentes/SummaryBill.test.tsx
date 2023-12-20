/* eslint-disable testing-library/await-async-events */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen } from '@testing-library/react'
import { SummaryBill } from './SummaryBill'

import cart from '@/redux/cart/slice'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'
import { Provider } from 'react-redux'
import { FormProvider, useForm } from 'react-hook-form'
import userEvent from '@testing-library/user-event'

const product2 = {
  id: 2,
  name: 'Pão de Queijo de Balde 4 Kg',
  image: '/balde4Kg.jpg',
  tags: ['1 e 2Kg', 'delicioso'],
  description: 'Praticidade excepcional em 4kg. Sabor abundante.',
  price: 9.9,
  quantity: 1,
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
describe('SummaryBill component', () => {
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

  const TestComponent = () => {
    const methods = useForm()
    return (
      <Provider store={Mockstore}>
        <FormProvider {...methods}>
          <SummaryBill />
        </FormProvider>
      </Provider>
    )
  }

  it('Should render the component', () => {
    render(<TestComponent />)
  })
  it('should get the corret total price in the cart', async () => {
    render(<TestComponent />)

    const totalPrice = screen.getByRole('total-price')
    expect(totalPrice).toHaveTextContent('29.70')
  })

  it('should get and render the products', async () => {
    render(<TestComponent />)

    const state = Mockstore.getState().cart.products
    state.forEach((product) => {
      expect(screen.getByText(product.name)).toBeVisible()
      expect(screen.getByText(product.quantity)).toBeVisible()

      const imageElement = screen.getByAltText(product.name)
      expect(imageElement).toBeVisible()
    })
  })

  it('Should render the confirmation button and checks its state', async () => {
    render(<TestComponent />)

    const button = screen.getByRole('confirm-bill')
    expect(button).toBeVisible()

    act(() => {
      userEvent.click(button)
    })
    expect(button).toBeEnabled()
  })
})
