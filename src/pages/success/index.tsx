import { Header } from '@/components/Header'

import image from '../../../public/successSVG.svg'

import Image from 'next/image'
import { baloo800 } from '../../styles/fonts'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { RenderDetail } from '@/components/success/RenderDetail'

import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function Success() {
  const router = useRouter()
  const { query } = router

  useEffect(() => {
    if (!query.name) {
      router.replace('/checkout')
    }
  }, [query, router])

  return (
    <main className="bg-background h-screen  lg:px-36 flex flex-col gap-6 md:gap-16">
      <Header />
      <main className=" mt-32 md:mt-8 px-4 md:px-0 ">
        <div className="flex flex-col gap-2">
          <h1
            className={`${baloo800.className} text-3xl md:text-5xl text-yellow-dark`}
          >
            Uhull! Pedido confirmado
          </h1>
          <h4 className="text-xl text-base-subtitle">
            Agora é só aguardar que logo o produto chegará até você
          </h4>
        </div>

        <div className="flex flex-col md:flex-row justify-between mt-8 md:mt-6 gap-8 md:gap-3 items-center ">
          <div className="w-full md:w-1/2 p-1 md:p-[2px]  bg-gradient-to-br from-[#8047f8] to-[#dbac2c]  border-2  rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border-gradientee rounded-[6px 36px]">
            <div className="bg-background bg flex flex-col gap-4 md:gap-12 p-4 md:pl-14 md:py-14 border-2  rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] border-gradientee rounded-[6px 36px]">
              <RenderDetail
                title={`Entrega para ${query.name}, ${query.number}`}
                subtitle={`${query.city}, PR`}
                Icon={MapPin}
                bgColor="purple"
              />
              <RenderDetail
                Icon={Timer}
                bgColor="yellow"
                subtitle="Rota pré programada ( entraremos em contato confirmando )"
                title="Previsão de entrega"
              />
              <RenderDetail
                Icon={CurrencyDollar}
                bgColor="yellow-dark"
                subtitle="Pagamento na entrega"
                title={
                  query.paymentMethod
                    ? String(query.paymentMethod)
                    : 'Acerto na entrega'
                }
              />
            </div>
          </div>

          <div className="relative w-full h-56 md:w-[35rem] md:h-[25rem]">
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
