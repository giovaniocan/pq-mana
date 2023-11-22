import { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { Tags } from './Tags'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'

import { baloo700 } from '../../styles/fonts'
import { addProductToCart } from '@/redux/cart/slice'

interface ProductProps {
  id: number
  name: string
  image: string
  tags: string[]
  description: string
  price: number
}

interface Props {
  product: ProductProps
}

export function ProductCard({ product }: Props) {
  const [quantity, setQuantity] = useState(0)

  const dispatch = useDispatch()

  function handleAddToCart() {
    dispatch(addProductToCart({ ...product, quantity }))
    setQuantity(0)
  }

  function handleIncrease() {
    setQuantity((state) => state + 1)
  }

  function handleDecrease() {
    if (quantity > 0) {
      setQuantity((state) => state - 1)
    } else {
      alert('A quantidade não pode ser negativa')
    }
  }

  return (
    <div className="max-w-[24rem] bg-base-card flex flex-col px-5 py-6 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] ">
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-28 md:w-36 md:h-40">
          <Image
            src={product.image}
            alt="Pão de Queijo"
            fill
            quality={100}
            className="object-cover rounded-lg"
          />
        </div>
        <div className="hidden items-center mt-3 md:flex w-full flex-wrap justify-around">
          {product.tags.map((tag) => {
            return <Tags key={tag}>{tag}</Tags>
          })}
        </div>
        <h2
          className={`${baloo700.className} text-center text-base-subtitle text-lg md:text-xl mt-4`}
        >
          {product.name}
        </h2>
        <span className="text-xs md:text-sm mt-2 text-base-label text-center">
          {product.description}
        </span>
      </div>

      <div className="flex flex-col px-1 justify-between items-center mt-3 gap-2 md:flex-row md:gap-4 md:mt-8">
        <div className="flex items-center gap-[2px]">
          <span className="text-sm">R$</span>
          <h3 className={`${baloo700.className} text-2xl`}>
            {product.price.toFixed(2)}
          </h3>
        </div>
        <div className="flex gap-2 md:gap-1 ">
          <div className="flex gap-2 bg-base-button items-center py-2 px-3 rounded-lg">
            <button onClick={handleDecrease}>
              <Minus color="#8047F8" size={22} />
            </button>
            <p className="text-base text-base-title">{quantity}</p>
            <button onClick={handleIncrease}>
              <Plus color="#8047F8" size={22} />
            </button>
          </div>
          <div className="bg-purple-dark p-2 cursor-pointer rounded-lg">
            <ShoppingCart
              onClick={handleAddToCart}
              size={30}
              weight="fill"
              color="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
