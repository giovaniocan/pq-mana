import Image from 'next/image'

import { Trash } from 'phosphor-react'

import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  removeProductFromCart,
} from '@/redux/cart/slice'
import { PlusAndMinusButton } from '../../PlusAndMinus/PlusAndMinutsButton'

export interface Product {
  id: number
  name: string
  image: string
  description: string
  price: number
  quantity: number
}

interface CardCartProps {
  product: Product
}

export function CardCart({ product }: CardCartProps) {
  const [quantity, setQuantity] = useState(product.quantity)

  const dispatch = useDispatch()

  function removeProduct() {
    dispatch(removeProductFromCart(product.id))
  }

  function handleIncrease() {
    dispatch(increaseProductQuantity(product.id))
    setQuantity(quantity + 1)
  }

  function handleDecrease() {
    dispatch(decreaseProductQuantity(product.id))
    setQuantity(quantity - 1)
  }

  const totalPrice = product.price * quantity
  return (
    <div
      data-testid="card-cart"
      className="flex gap-5 mt-5 lg:flex-row items-center pb-6 border-b border-base-button"
    >
      <div className="relative w-20 h-20">
        <Image src={product.image} alt={product.name} fill quality={100} />
      </div>
      <div className="flex flex-col-reverse lg:flex-row w-full lg:items-center justify-between">
        <div>
          <h4 className="text-base-subtitle text-base">{product.name}</h4>
          <div className="flex gap-2">
            <PlusAndMinusButton
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              quantity={quantity}
            />
            <button
              role="remove-button"
              type="button"
              onClick={removeProduct}
              className="bg-base-button items-center rounded-lg flex gap-[0.25rem]  py-2 px-3"
            >
              <Trash size={16} color="#8047F8" />
              <span className="text-xs text-base-text">REMOVER</span>
            </button>
          </div>
        </div>
        <h3
          role="total-price-of-the-product"
          className="text-base-text mb-1 lg:mb-0 font-bold text-base"
        >
          R$ {totalPrice.toFixed(2)}
        </h3>
      </div>
    </div>
  )
}
