import Image from 'next/image'
import { baloo800 } from '../../styles/fonts'
import Photo from '../../../public/intro-picture.jpg'
import { IntroParagraphs } from './IntroPraphes'

export function Intro() {
  return (
    <div className="flex flex-col  items-center md:flex-row justify-between gap-8 md:gap-32 py-8 px-4 md:px-16">
      <main className="md:mr-10">
        <h1
          className={`${baloo800.className} text-3xl md:text-5xl text-base-title mb-6 md:mb-10`}
        >
          Descubra o sabor autêntico e irresistível do nosso pão de queijo em
          cada mordida
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <IntroParagraphs />
        </div>
      </main>

      <div className="relative w-60 h-56 md:w-[50rem] md:h-[28rem]">
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
