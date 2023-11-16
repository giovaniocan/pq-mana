import Image from 'next/image'

import { baloo800 } from '../../styles/fonts'

import Photo from '../../../public/intro-picture.jpg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <div className="flex justify-between items-center gap-32 ">
      <main>
        <h1 className={`${baloo800.className} text-5xl text-base-title my-10`}>
          Descubra o sabor autentico e irresistível do nosso pão de queijo em
          cada mordida
        </h1>

        <div className="mr-10 grid grid-cols-2 gap-8">
          <div className="flex gap-3 items-center">
            <div className="bg-yellow-dark rounded-full justify-center items-center p-[6px]">
              <ShoppingCart size={20} weight="fill" color="#fff" />
            </div>
            <p className="text-base text-base-text">
              Compra simples, segura e prática
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-yellow rounded-full justify-center items-center p-[6px]">
              <Package size={20} weight="fill" color="#fff" />
            </div>
            <p className="text-base text-base-text">
              Os produtos são 100% refrigerados e lacrados
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-base-text rounded-full justify-center items-center p-[6px]">
              <Timer size={22} weight="fill" color="#fff" />
            </div>
            <p className="text-base text-base-text">
              Entrega rápida e confiavél
            </p>
          </div>

          <div className="flex gap-3 items-center">
            <div className="bg-purple rounded-full justify-center items-center p-[6px]">
              <Coffee size={22} weight="fill" color="#fff" />
            </div>
            <p className="text-base text-base-text">
              Sabores que acompanham tudo!
            </p>
          </div>
        </div>
      </main>

      <div className="relative  w-[50rem] h-[28rem]">
        <Image
          src={Photo}
          alt="Pão de Queijo"
          fill
          quality={100}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  )
}
