import { ShoppingCart, XCircle } from 'phosphor-react'

import { baloo700 } from '../../styles/fonts'

export function EmptyCart() {
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
    </div>
  )
}
