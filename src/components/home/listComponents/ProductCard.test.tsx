import { store } from '@/redux/store'
import { Cards } from '@/utils/CardsContent'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
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

  it('should incremets and decrements de selected quantity', async () => {
    render(
      <Provider store={store}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const addButton = screen.getByRole('add-button')
    const subtractButton = screen.getByRole('subtract-button')
    const counter = screen.getByText('0')

    fireEvent.click(addButton)

    await waitFor(() => {
      expect(counter).toHaveTextContent('1')
    })

    fireEvent.click(subtractButton)
    // Usando waitFor para aguardar a próxima renderização antes de verificar
    await waitFor(() => {
      expect(counter).toHaveTextContent('0')
    })
  })

  it('Should not allow the quantity to be negative', async () => {
    render(
      <Provider store={store}>
        <ProductCard product={Cards[0]} />
      </Provider>,
    )

    const subtractButton = screen.getByRole('subtract-button')

    fireEvent.click(subtractButton)

    const quantity = screen.getByRole('quantity-display')

    await waitFor(() => {
      expect(quantity).toHaveTextContent('0')
    })
  })
})
