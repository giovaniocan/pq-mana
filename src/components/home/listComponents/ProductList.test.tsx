import { render, screen } from '@testing-library/react'
import { ProductsList } from './ProductsList'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'

import { Cards } from '@/utils/CardsContent'

describe('Product List Component', () => {
  it('Should render the ProductsList component', () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    )

    const productsList = screen.getByText('Nossos produtos')
    expect(productsList).toBeInTheDocument()
  })

  it('Should render the corret number of produts', async () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    )

    const products = await screen.findAllByRole('productItem')
    expect(products.length).toBe(Cards.length)
  })
  it('Should render the correct products', async () => {
    render(
      <Provider store={store}>
        <ProductsList />
      </Provider>,
    )

    const products = await screen.findAllByRole('productItem')
    products.forEach((product, index) => {
      expect(product).toBeInTheDocument()
      const name = screen.getByText(Cards[index].name)
      expect(name).toBeInTheDocument()
      expect(product).toHaveTextContent(Cards[index].price.toString())
      const description = screen.getByText(Cards[index].description)
      expect(description).toBeInTheDocument()
    })
  })
})
