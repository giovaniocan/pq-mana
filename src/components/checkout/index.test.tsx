/* eslint-disable testing-library/no-wait-for-multiple-assertions */
/* eslint-disable testing-library/await-async-events */
/* eslint-disable testing-library/no-unnecessary-act */
import { act, render, screen, waitFor } from '@testing-library/react'
import { FormComponent } from '.'

import cart, { addProductToCart } from '@/redux/cart/slice'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'
import { Provider } from 'react-redux'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-11'
import userEvent from '@testing-library/user-event'

const handleSubmitForm = jest.fn()

const product = {
  id: 1,
  name: 'Pão de Queijo de Pote 1 Kg',
  image: '/Pote1Kg.jpg',
  tags: ['1 e 2Kg', 'delicioso'],
  description: 'Sabor irresistível em 1kg. Praticidade única.',
  price: 9.9,
  quantity: 1,
}

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

  it('Should show the error message when the user tries to send the form with invalidate content', async () => {
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

    act(() => {
      Mockstore.dispatch(addProductToCart(product))
    })

    const button = screen.getByRole('confirm-bill')
    act(() => {
      userEvent.click(button)
    })

    await waitFor(() => {
      expect(screen.getByText('o nome da empresa é obrigatório')).toBeVisible()
      expect(screen.getByText('o telefone é obrigatório')).toBeVisible()

      expect(screen.getByText('o endereço é obrigatório')).toBeVisible()
      expect(screen.getByText('a cidade é obrigatória')).toBeVisible()
      expect(
        screen.getByText('O cep deve ter só números e 8 caractéres'),
      ).toBeVisible()
      expect(screen.getByText('o número é obrigatório')).toBeVisible()
      expect(screen.getByText('Selecione um método de pagamento')).toBeVisible()
    })
  })

  it('Should type into fields and submit form', async () => {
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

    act(() => {
      Mockstore.dispatch(addProductToCart(product))
    })

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

    await waitFor(() => {
      expect(nameField).toHaveValue(mockName)
      expect(phoneField).toHaveValue(mockPhone)
      expect(addressField).toHaveValue(mockAddress)
      expect(cityField).toHaveValue(mockCity)
      expect(cepField).toHaveValue(mockCep)
      expect(numberField).toHaveValue(mockNumber)
      expect(paymentMethod).toBeChecked()
    })

    await waitFor(() => {
      expect(handleSubmitForm).toHaveBeenCalledTimes(1)

      expect(handleSubmitForm).toHaveBeenCalledWith(
        expect.objectContaining({
          name: mockName,
          phone: mockPhone,
          address: mockAddress,
          city: mockCity,
          cep: mockCep,
          number: mockNumber,
          paymentMethod: mockPaymentMethod,
        }),
        expect.anything(),
      )
    })
  })
})
