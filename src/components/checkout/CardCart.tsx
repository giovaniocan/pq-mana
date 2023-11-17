import Image from 'next/image'

import image from '../../../public/testeimage.svg'
import { Minus, Plus, Trash } from 'phosphor-react'
import { PlusAndMinusButton } from '../PlusAndMinutsButton'

export function CardCart() {
  return (
    <div className="card-cart flex items-center justify-between pb-6 border-b border-base-button">
      <div className="flex gap-5">
        <div className="relative w-16 h-16">
          <Image src={image} alt="Pão de Queijo" fill quality={100} />
        </div>
        <div>
          <h4 className="text-base-subtitle text-base">nome do produto</h4>
          <div className="flex gap-2">
            <PlusAndMinusButton />
            <button className="bg-base-button items-center rounded-lg flex gap-[0.25rem]  py-2 px-3">
              <Trash size={16} color="#8047F8" />
              <span className="text-xs text-base-text">REMOVER</span>
            </button>
          </div>
        </div>
      </div>
      <h3 className="text-base-text font-bold text-base">R$ 9,90</h3>
    </div>
  )
}
