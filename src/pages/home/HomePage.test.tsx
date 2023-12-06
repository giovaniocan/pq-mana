import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Home from '@/pages/home'

describe('Home component', () => {
  it('Should render the Home Page and it is comonents', () => {
    render(
      <Provider store={store}>
        <Home />
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
