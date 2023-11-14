import Image from 'next/image'

import {baloo700} from '../styles/fonts'

import LogoImage from '../../public/logo.svg'
import Link from 'next/link'
import {MapPin, ShoppingCart} from 'phosphor-react'

export function Header() {
  return (
    <main className=" flex justify-between px-32 py-9">

      <Link href="/home" className='flex items-center gap-6'>
        <Image
            src={LogoImage} 
            height={62} 
            width={94} 
            alt="" 
        />
        <span className={`${baloo700.className} text-2xl`}>
            Pão de queijo
        </span>
      </Link>

      <div className='flex gap-3 items-center'>
        <div className=' flex gap-1 items-center py-2 px-3 rounded-md bg-purple-light text-purple-dark'>
            <MapPin size={22} weight='fill'/>
            <span className='text-sm'>Moreira Sales, PR</span>
        </div>

        <Link
            href="/checkout"
            className='bg-yellow-light p-2 rounded-md'
        >
           <ShoppingCart size={22} color="#C47F17" weight="fill" />
           <p className='absolute -mt-10 bg-yellow-dark rounded-full px-2 py-1 ml-5 text-white text-xs font-bold  '>0</p>
        </Link>
      </div>
      
    </main>
  )
}
