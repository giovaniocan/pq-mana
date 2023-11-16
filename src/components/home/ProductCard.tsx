import Image from 'next/image'
import image from '../../../public/testeimage.svg'
import { Tags } from './Tags'

import { baloo700 } from '../../styles/fonts'
import { Minus, Plus, ShoppingCart } from 'phosphor-react'

export function ProductCard() {
  return (
    <div className="max-w-[16rem] bg-base-card flex flex-col px-5 py-6 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] ">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-28 md:w-36 md:h-40">
          <Image
            src={image}
            alt="Pão de Queijo"
            fill
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="hidden mt-3 md:flex w-full flex-wrap justify-around">
          <Tags>teste</Tags>
          <Tags>sla</Tags>
          <Tags>sla</Tags>
        </div>
        <h2
          className={`${baloo700.className} text-center text-base-subtitle text-lg md:text-xl mt-4`}
        >
          nome do produto
        </h2>
        <span className="text-xs md:text-sm mt-2 text-base-label text-center">
          Explosão de sabores irresistíveis e especiais
        </span>
      </div>

      <div className="flex flex-col items-center mt-3 gap-2 md:flex-row md:gap-4 md:mt-8">
        <div className="flex items-center gap-[2px]">
          <span className="text-sm">R$</span>
          <h3 className={`${baloo700.className} text-2xl`}>9,90</h3>
        </div>
        <div className="flex gap-2 md:gap-1 ">
          <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
            <Minus color="#8047F8" size={22} />
            <p className="text-base text-base-title">1</p>
            <Plus color="#8047F8" size={22} />
          </div>
          <div className="bg-purple-dark p-2 rounded-lg">
            <ShoppingCart size={30} weight="fill" color="#fff" />
          </div>
        </div>
      </div>
    </div>
  )
}
