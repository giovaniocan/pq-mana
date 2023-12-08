import { useState } from 'react'
import Image from 'next/image'
import { useDispatch } from 'react-redux'

import { ShoppingCart } from 'phosphor-react'

import { baloo700 } from '../../../styles/fonts'
import { addProductToCart } from '@/redux/cart/slice'
import { PlusAndMinusButton } from '../../PlusAndMinus/PlusAndMinutsButton'
import { ToastyNotification } from '@/hooks/ToastyMessage'

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

  async function handleAddToCart() {
    if (quantity <= 0) {
      return ToastyNotification({
        message: 'Selecione a quantidade antes de adicionar ao carrinho',
        type: 'error',
        whereInTheScreen: 'top-right',
      })
    }

    try {
      await dispatch(addProductToCart({ ...product, quantity }))
      setQuantity(0)

      ToastyNotification({
        message: 'Produto adicionado ao carrinho ! ',
        type: 'success',
        whereInTheScreen: 'bottom-right',
      })
    } catch (error) {
      ToastyNotification({
        message:
          'Erro ao adicionar o produto ao carrinho. Tente novamente mais tarde.',
        type: 'error',
        whereInTheScreen: 'top-right',
      })
    }
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
    <div
      role="productItem"
      className="max-w-[24rem] bg-base-card flex flex-col justify-between mt-4 px-3 pb-4 pt-1 md:pt-4 rounded-tl-md rounded-tr-[36px] rounded-br-md rounded-bl-[36px] "
    >
      <div className="flex flex-col items-center">
        <div className="relative w-full h-40 md:w-full md:h-44">
          <Image src={product.image} alt="Pão de Queijo" fill quality={100} />
        </div>
        {/*  <div className="hidden items-center mt-3 md:flex w-full flex-wrap justify-around">
          {product.tags.map((tag) => {
            return <Tags key={tag}>{tag}</Tags>
          })}
        </div> */}
        <h2
          className={`${baloo700.className} text-center text-base-subtitle text-base lg:text-lg mt-1 md:mt-4`}
        >
          {product.name}
        </h2>
        <span className="hidden md:flex text-xs md:text-sm mt-2 text-base-label text-center">
          {product.description}
        </span>
      </div>

      <div className="flex flex-col px-1 justify-between items-center gap-1 md:flex-row md:gap-4 md:mt-4">
        <div className="flex md:mt-0 items-center gap-[2px]">
          <span className="text-sm">R$</span>
          <h3 className={`${baloo700.className} text-lg md:text-2xl`}>
            {product.price.toFixed(2)}
          </h3>
        </div>
        <div className="flex gap-2 ">
          <PlusAndMinusButton
            handleDecrease={handleDecrease}
            handleIncrease={handleIncrease}
            quantity={quantity}
          />
          <button
            role="add-to-cart"
            onClick={handleAddToCart}
            className="bg-purple-dark p-2 cursor-pointer rounded-lg disabled:cursor-not-allowed"
          >
            <ShoppingCart size={25} weight="fill" color="#fff" />
          </button>
        </div>
      </div>
    </div>
  )
}
