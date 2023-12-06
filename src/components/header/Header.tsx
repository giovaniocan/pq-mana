import Image from 'next/image'
import { baloo700 } from '../../styles/fonts'
import LogoImage from '../../../public/logo.svg'
import Link from 'next/link'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useSelector } from 'react-redux'
import { selectNumberOfProductsInCart } from '@/redux/cart/cart.selector'

export function Header() {
  const numberOfPRoductsInCart = useSelector(selectNumberOfProductsInCart)

  return (
    <main className="bg-background z-10 w-full fixed pl-4 lg:pl-0 pr-8 lg:pr-0 md:relative flex justify-between items-center pt-6 pb-2 border-b md:border-0 border-b-yellow  md:py-9 ">
      <Link href="/" className="flex items-center gap-3 md:gap-6">
        <Image src={LogoImage} height={62} width={94} alt="" />
        <span className={`${baloo700.className} text-lg md:text-2xl`}>
          Pão de queijo
        </span>
      </Link>

      <div className="flex gap-3 items-center ">
        <div className="hidden md:flex gap-1 items-center py-2 px-3 rounded-md bg-purple-light text-purple-dark">
          <MapPin size={22} weight="fill" />
          <span className="text-sm">Moreira Sales, PR</span>
        </div>

        <Link
          href="/checkout"
          className="bg-yellow-light p-2 rounded-md relative"
          role="cartIcon"
        >
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          <p className="absolute -mt-10 bg-yellow-dark rounded-full px-2 py-1 ml-5 text-white text-xs font-bold">
            {numberOfPRoductsInCart}
          </p>
        </Link>
      </div>
    </main>
  )
}
