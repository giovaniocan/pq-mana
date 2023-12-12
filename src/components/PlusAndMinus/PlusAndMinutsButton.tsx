import { Minus, Plus } from 'phosphor-react'

interface PlusAndMinusProps {
  quantity: number
  handleIncrease: () => void
  handleDecrease: () => void
}

export function PlusAndMinusButton({
  handleDecrease,
  handleIncrease,
  quantity,
}: PlusAndMinusProps) {
  return (
    <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
      <button role="subtract-button" type="button" onClick={handleDecrease}>
        <Minus color="#8047F8" size={22} />
      </button>
      <p role="quantity-display" className="text-base text-base-title">
        {quantity}
      </p>
      <button role="increment-button" type="button" onClick={handleIncrease}>
        <Plus color="#8047F8" size={22} />
      </button>
    </div>
  )
}
