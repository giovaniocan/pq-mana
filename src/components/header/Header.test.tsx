import { fireEvent, render, screen } from '@testing-library/react'
import { useSelector } from 'react-redux'
import { Header } from './Header'
import mockRouter from 'next-router-mock'

jest.mock('next/router', () => jest.requireActual('next-router-mock'))

jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useSelector: jest.fn(),
}))

const mockPush = jest.fn()
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}))

describe('Header component', () => {
  beforeEach(() => {
    mockPush.mockClear()
  })

  it('Should render the Header component', () => {
    ;(useSelector as jest.Mock).mockReturnValue(0)

    render(<Header />)

    const cartIconHeader = screen.getByRole('cartIcon')
    expect(cartIconHeader).toBeInTheDocument()
  })

  it('Should send user to checkout page when click in cartIcon button', () => {
    render(<Header />)

    const cartIcon = screen.getByRole('cartIcon')
    fireEvent.click(cartIcon)

    expect(mockPush).toHaveBeenCalledWith('/checkout')
  })

  it('Should send user to home page when click in the logo', () => {
    render(<Header />)

    const logo = screen.getByRole('logo')
    fireEvent.click(logo)

    expect(mockPush).toHaveBeenCalledWith('/')
  })

  it('Should update the number of products in the cart', async () => {
    ;(useSelector as jest.Mock).mockReturnValue(2)

    render(<Header />)

    const cartIconHeader = screen.getByRole('cartIcon')
    expect(cartIconHeader).toHaveTextContent('2')
  })
})
