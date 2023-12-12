import cart, { addProductToCart } from '@/redux/cart/slice'
import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'

describe('Reducer test', () => {
  let Mockstore: EnhancedStore<RootState>
  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
    })
  })

  it('Should add the corret product to the cart', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }

    Mockstore.dispatch(addProductToCart(product))

    const state = Mockstore.getState()
    expect(state.cart.products.length).toBe(1)

    expect(state.cart.products[0]).toEqual(product)
  })

  it('Should not add the same product twice', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }
    const product2 = {
      id: 2,
      name: 'Pão de Queijo de Pote 4 Kg',
      image: 'Pote4Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 4kg. Praticidade única.',
      price: 10.9,
      quantity: 1,
    }

    Mockstore.dispatch(addProductToCart(product))
    Mockstore.dispatch(addProductToCart(product))

    const state = Mockstore.getState()
    expect(state.cart.products.length).toBe(1)

    expect(state.cart.products[0].quantity).toBe(2) // Verifica se a quantidade foi incrementada para 2

    Mockstore.dispatch(addProductToCart(product2)) // Adiciona o produto 2
    const stateAfterSecondProduct = Mockstore.getState()
    expect(stateAfterSecondProduct.cart.products.length).toBe(2)
  })
})
