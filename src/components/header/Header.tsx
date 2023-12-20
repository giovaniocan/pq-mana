import Image from 'next/image'
import { baloo700 } from '../../styles/fonts'
import LogoImage from '../../../public/logo.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'

import { useSelector } from 'react-redux'
import { selectNumberOfProductsInCart } from '@/redux/cart/cart.selector'
import { useRouter } from 'next/router'

export function Header() {
  const router = useRouter()

  const numberOfPRoductsInCart = useSelector(selectNumberOfProductsInCart)

  function handleSendUserToCheckoutPage() {
    router.push('/checkout')
  }

  function handleSendUserToHomePage() {
    router.push('/')
  }
  return (
    <main className="bg-background z-10 w-full fixed pl-4 lg:pl-0 pr-8 lg:pr-0 md:relative flex justify-between items-center pt-6 pb-2 border-b md:border-0 border-b-yellow  md:py-9 ">
      <div
        onClick={handleSendUserToHomePage}
        role="logo"
        className="flex items-center gap-3 md:gap-6 cursor-pointer "
      >
        <Image src={LogoImage} height={62} width={94} alt="" />
        <span className={`${baloo700.className} text-lg md:text-2xl`}>
          Pão de queijo
        </span>
      </div>

      <div className="flex gap-3 items-center ">
        <div className="hidden md:flex gap-1 items-center py-2 px-3 rounded-md bg-purple-light text-purple-dark">
          <MapPin size={22} weight="fill" />
          <span className="text-sm">Moreira Sales, PR</span>
        </div>

        <button
          onClick={handleSendUserToCheckoutPage}
          className="bg-yellow-light p-2 rounded-md relative"
          role="cartIcon"
        >
          <ShoppingCart size={22} color="#C47F17" weight="fill" />
          <p className=" cursor-pointer absolute -mt-10 bg-yellow-dark rounded-full px-2 py-1 ml-5 text-white text-xs font-bold">
            {numberOfPRoductsInCart}
          </p>
        </button>
      </div>
    </main>
  )
}
