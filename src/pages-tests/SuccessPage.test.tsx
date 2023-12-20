import Success from '@/pages/success'
import { render, screen } from '@testing-library/react'
import { MemoryRouterProvider } from 'next-router-mock/dist/MemoryRouterProvider/next-13'

import { EnhancedStore, configureStore } from '@reduxjs/toolkit'
import { RootState } from '@/redux/rootReducer'

import cart from '@/redux/cart/slice'
import { Provider } from 'react-redux'

jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {
      name: 'Giovani',
      number: '42',
      city: 'Goioere',
      paymentMethod: 'pix',
    },
  }),
}))

describe('Success Page', () => {
  let Mockstore: EnhancedStore<RootState>
  beforeEach(() => {
    Mockstore = configureStore({
      reducer: {
        cart,
      },
    })
  })

  it('Should render the component', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Success />
        </MemoryRouterProvider>
      </Provider>,
    )
    expect(screen.getByText('Uhull! Pedido confirmado')).toBeInTheDocument()
  })

  it('Should render the component with the correct data', async () => {
    render(
      <Provider store={Mockstore}>
        <MemoryRouterProvider>
          <Success />
        </MemoryRouterProvider>
      </Provider>,
    )

    expect(screen.getByText('Entrega para Giovani, 42')).toBeInTheDocument()
    expect(screen.getByText(/goioere/i)).toBeInTheDocument()
    expect(screen.getByText('pix')).toBeVisible()
  })
})
