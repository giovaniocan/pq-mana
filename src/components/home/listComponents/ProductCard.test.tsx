import { store } from '@/redux/store'
import { Cards } from '@/utils/CardsContent'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { ProductCard } from './ProductCard'

describe('Product Card Component', () => {
  it('Should render the ProductCard component', () => {
    render(
      <Provider store={store}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const productCard = screen.getByRole('productItem')
    expect(productCard).toBeInTheDocument()
  })

  it('Should render the correct product data', () => {
    // NAO TERMINEI AQUI
    render(
      <Provider store={store}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const name = screen.getByText(Cards[0].name)
    expect(name).toBeInTheDocument()

    const price = screen.getByText(Cards[0].price.toFixed(2))
    expect(price).toBeInTheDocument()

    const description = screen.getByText(Cards[0].description)
    expect(description).toBeInTheDocument()
  })
})
