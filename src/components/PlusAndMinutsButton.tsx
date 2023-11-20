import { Minus, Plus } from 'phosphor-react'
import { useState } from 'react'

export function PlusAndMinusButton() {
  const [counter, setCounter] = useState(1)

  function handleIncrease() {
    setCounter(counter + 1)
  }

  function handleDecrease() {
    if (counter === 1) return
    setCounter(counter - 1)
  }

  return (
    <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
      <button onClick={handleDecrease}>
        <Minus color="#8047F8" size={22} />
      </button>
      <p className="text-base text-base-title">{counter}</p>
      <button onClick={handleIncrease}>
        <Plus color="#8047F8" size={22} />
      </button>
    </div>
  )
}
