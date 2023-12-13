import { act, render, screen } from '@testing-library/react'
import { FormComponent } from '.'

import cart, { addProductToCart } from '@/redux/cart/slice'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'
import { Provider } from 'react-redux'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-11'

const handleSubmitForm = jest.fn()

describe('Form Component ', () => {
  let Mockstore: EnhancedStore<RootState>
  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
    })
  })

  it('Shoul render the component', () => {
    render(
      <Provider store={Mockstore}>
        <FormComponent handleFormSubmit={handleSubmitForm} isThereAnyProduct />
      </Provider>,
    )
  })

  it('Should show the empty cart component when the cart is empty', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <FormComponent
            handleFormSubmit={handleSubmitForm}
            isThereAnyProduct={false}
          />
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
          <FormComponent
            handleFormSubmit={handleSubmitForm}
            isThereAnyProduct
          />
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
})
