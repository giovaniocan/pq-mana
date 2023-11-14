import Image from 'next/image'

import { baloo800 } from '../../styles/fonts'

import Photo from '../../../public/intro-picture.jpg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

export function Intro() {
  return (
    <div className="my-20 flex justify-between gap-32 mr-12">
      <main>
        <h1 className={`${baloo800.className} text-5xl text-base-title m-10`}>
          Descubra o sabor autentico e irresistível do nosso pão de queijo
        </h1>

        <div className="mx-10 grid grid-cols-2 gap-8 mt-3">
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

      <Image
        src={Photo}
        alt="Pão de Queijo"
        width={476}
        height={360}
        objectFit="contain"
      />
    </div>
  )
}
