import { fireEvent, render, screen } from '@testing-library/react'
import { PlusAndMinusButton } from './PlusAndMinutsButton'

describe('Plus And Minus button Component', () => {
  it('should render de component and recieve de functions and values', () => {
    const increaseFunction = jest.fn()
    const decreaseFunction = jest.fn()
    const quantity = 1

    render(
      <PlusAndMinusButton
        handleDecrease={decreaseFunction}
        handleIncrease={increaseFunction}
        quantity={quantity}
      />,
    )

    const incrementButton = screen.getByRole('increment-button')
    const subtractButton = screen.getByRole('subtract-button')

    fireEvent.click(incrementButton)
    expect(increaseFunction).toHaveBeenCalled()

    fireEvent.click(subtractButton)
    expect(decreaseFunction).toHaveBeenCalled()

    const quant = screen.getByText(quantity)
    expect(quant).toBeInTheDocument()
  })
})
