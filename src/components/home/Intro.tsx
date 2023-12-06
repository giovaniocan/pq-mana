import Image from 'next/image'
import { baloo800 } from '../../styles/fonts'
import Photo from '../../../public/intro-picture.jpg'
import { IntroParagraphs } from './IntroPraphes'

export function Intro() {
  return (
    <div className="flex mt-24 md:mt-0 flex-col px-4 lg:px-0 items-center md:flex-row justify-between gap-8 lg:gap-28 2xl:gap-32 py-8 ">
      <main className="md:mr-10 ">
        <h1
          className={`${baloo800.className} text-2xl xl:text-4xl 2xl:text-5xl text-base-title mb-6 md:mb-10`}
        >
          Descubra o sabor autêntico e irresistível do nosso pão de queijo em
          cada mordida
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-8">
          <IntroParagraphs />
        </div>
      </main>

      <div className="relative w-72 h-56 md:w-[30rem] md:h-64 lg:w-[45rem] lg:h-[20rem] xl:w-[60rem] xl:h-[28rem]">
        <Image
          src={Photo}
          alt="Pão de Queijo"
          fill
          quality={100}
          className="rounded-lg"
        />
      </div>
    </div>
  )
}
