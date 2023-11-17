import { Minus, Plus } from 'phosphor-react'

export function PlusAndMinusButton() {
  return (
    <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
      <button>
        <Minus color="#8047F8" size={22} />
      </button>
      <p className="text-base text-base-title">1</p>
      <button>
        <Plus color="#8047F8" size={22} />
      </button>
    </div>
  )
}
