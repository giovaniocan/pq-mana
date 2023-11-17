import { Header } from '@/components/Header'

import image from '../../../public/successSVG.svg'

import Image from 'next/image'
import { baloo800 } from '../../styles/fonts'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

export default function Success() {
  return (
    <main className="bg-background h-screen lg:px-36 flex flex-col gap-6 md:gap-16">
      <Header />
      <main className="mt-8 px-16">
        <div className="flex flex-col gap-2">
          <h1
            className={`${baloo800.className} text-3xl md:text-5xl text-yellow-dark`}
          >
            Uhu! Pedido confirmado
          </h1>
          <h4 className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o produto chegará até você
          </h4>
        </div>

        <div className="flex justify-between mt-6 gap-3 items-center ">
          <div className="w-1/2 p-[2px] bg-gradient-to-br from-[#8047f8] to-[#dbac2c] border-2  rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border-gradientee rounded-[6px 36px]">
            <div className="bg-background  flex flex-col gap-12 pl-14 py-14 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] rounded-[6px 36px]">
              <div className="flex gap-4 items-center">
                <div
                  className={`bg-purple rounded-full justify-center items-center p-[6px]`}
                >
                  <MapPin size={20} weight="fill" color="#fff" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base-text font-bold text-base">
                    endereço detalhado
                  </span>
                  <span className="text-base-text font-normal text-base">
                    Cidade
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div
                  className={`bg-yellow rounded-full justify-center items-center p-[6px]`}
                >
                  <Timer size={20} weight="fill" color="#fff" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base-text text-base">
                    Previsão de entrega
                  </span>
                  <span className="text-base-text font-bold  text-base">
                    Rota pré programada
                  </span>
                </div>
              </div>
              <div className="flex gap-4 items-center">
                <div
                  className={`bg-yellow-dark rounded-full justify-center items-center p-[6px]`}
                >
                  <CurrencyDollar size={20} weight="fill" color="#fff" />
                </div>
                <div className="flex flex-col">
                  <span className="text-base-text font-normal text-base">
                    Pagamento na entrega
                  </span>
                  <span className="text-base-text font-bold text-base">
                    Cartão de Crédito
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="relative w-60 h-56 md:w-[35rem] md:h-[25rem]">
            <Image
              src={image}
              alt="Pão de Queijo"
              fill
              quality={100}
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </main>
    </main>
  )
}
