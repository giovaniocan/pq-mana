import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function PlusAndMinusButton() {
  const [quantity, setQuantity] = useState(0)

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    } else {
      alert('A quantidade não pode ser negativa')
    }
  }

  return (
    <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
      <button onClick={handleDecrease}>
        <Minus color="#8047F8" size={22} />
      </button>
      <p className="text-base text-base-title">{quantity}</p>
      <button onClick={handleIncrease}>
        <Plus color="#8047F8" size={22} />
      </button>
    </div>
  )
}
