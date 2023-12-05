import { ShoppingCart, XCircle } from 'phosphor-react'

import { baloo700 } from '../../styles/fonts'
import { useRouter } from 'next/router'

export function EmptyCart() {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="mt-6 flex">
        <XCircle
          className="absolute ml-14 -mt-2"
          size={40}
          weight="fill"
          color="#D2042D"
        />
        <ShoppingCart size={85} weight="fill" />
      </div>
      <h1 className={`${baloo700.className} text-center text-3xl mt-6`}>
        Seu carrinho esta vazio
      </h1>

      <button
        type="button"
        className={`uppercase flex gap-4 items-center font-medium text-lg mt-8 justify-center w-full px-3 py-3 bg-yellow rounded hover:bg-yellow-dark/75`}
        onClick={() => router.push('/')}
      >
        Continue comprando
      </button>
    </div>
  )
}
