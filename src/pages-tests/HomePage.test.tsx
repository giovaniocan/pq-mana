/* eslint-disable testing-library/no-unnecessary-act */
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Home from '@/pages/home'
import { MemoryRouterProvider } from 'next-router-mock/MemoryRouterProvider/next-13'

describe('Home component', () => {
  it('Should render the Home Page and it is comonents', async () => {
    render(
      <Provider store={store}>
        <MemoryRouterProvider>
          <Home />
        </MemoryRouterProvider>
      </Provider>,
    )

    const cartIconHeader = screen.getByRole('cartIcon')
    expect(cartIconHeader).toBeInTheDocument()

    const introText = screen.getByText(/nossos produtos/i)
    expect(introText).toBeInTheDocument()

    const productList = screen.getByText('Nossos produtos')
    expect(productList).toBeInTheDocument()
  })
})
