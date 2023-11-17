import Image from 'next/image'

import image from '../../../public/testeimage.svg'
import { Trash } from 'phosphor-react'
import { PlusAndMinusButton } from '../PlusAndMinutsButton'

export function CardCart() {
  return (
    <div className="flex gap-5 lg:flex-row items-center pb-6 border-b border-base-button">
      <div className="relative w-20 h-20">
        <Image src={image} alt="Pão de Queijo" fill quality={100} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full lg:items-center justify-between">
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
        <h3 className="text-base-text mb-1 lg:mb-0 font-bold text-base">
          R$ 9,90
        </h3>
      </div>
    </div>
  )
}
