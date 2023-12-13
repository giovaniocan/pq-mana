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
