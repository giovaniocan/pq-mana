import cart, {
  addProductToCart,
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '@/redux/cart/slice'
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

    Mockstore.dispatch(addProductToCart(product2)) // Adiciona o produto 2
    const stateAfterSecondProduct = Mockstore.getState()
    expect(stateAfterSecondProduct.cart.products.length).toBe(2)
  })

  it('Should increment the quantity when add the same product', async () => {
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
    Mockstore.dispatch(addProductToCart(product))

    const state = Mockstore.getState()
    expect(state.cart.products.length).toBe(1)

    expect(state.cart.products[0].quantity).toBe(2)
  })

  it('Should not add the product with the quantity < 1', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 0,
    }

    try {
      Mockstore.dispatch(addProductToCart(product))
    } catch (error: any) {
      expect(error.message).toBe('A quantidade não pode ser zero')
    }

    const state = Mockstore.getState()
    expect(state.cart.products.length).toBe(0)
  })

  it('Should remove the product from cart', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }
    const idProduct = product.id

    Mockstore.dispatch(addProductToCart(product))

    const stateBeforeRemoveProduct = Mockstore.getState()
    expect(stateBeforeRemoveProduct.cart.products.length).toBe(1)

    Mockstore.dispatch(removeProductFromCart(idProduct))

    const stateAfterRemove = Mockstore.getState()
    expect(stateAfterRemove.cart.products.length).toBe(0)
  })

  it('Should increase product quantity', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }
    const idProduct = product.id

    Mockstore.dispatch(addProductToCart(product))

    Mockstore.dispatch(increaseProductQuantity(idProduct))

    const state = Mockstore.getState()
    expect(state.cart.products[0].quantity).toBe(2)
  })

  it('Should decrease product quantity', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 2,
    }
    const idProduct = product.id

    Mockstore.dispatch(addProductToCart(product))

    Mockstore.dispatch(decreaseProductQuantity(idProduct))

    const state = Mockstore.getState()
    expect(state.cart.products[0].quantity).toBe(1)
  })

  it('Should remove product from cart when quantity turn out 0', async () => {
    const product = {
      id: 1,
      name: 'Pão de Queijo de Pote 1 Kg',
      image: 'Pote1Kg',
      tags: ['1 e 2Kg', 'delicioso'],
      description: 'Sabor irresistível em 1kg. Praticidade única.',
      price: 9.9,
      quantity: 1,
    }
    const idProduct = product.id

    Mockstore.dispatch(addProductToCart(product))

    Mockstore.dispatch(decreaseProductQuantity(idProduct))

    const state = Mockstore.getState()
    expect(state.cart.products.length).toBe(0)
  })
})
