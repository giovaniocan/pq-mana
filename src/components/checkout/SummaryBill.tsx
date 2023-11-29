import { CardCart } from './CardCart'
import { baloo700 } from '../../styles/fonts'

import { useSelector } from 'react-redux'
import { RootState } from '@/redux/rootReducer'
import { selectTotalPrice } from '@/redux/cart/cart.selector'

import { useFormContext } from 'react-hook-form'
import { EmptyCart } from './EmptyCart'

export function SummaryBill() {
  const {
    formState: { isSubmitting },
  } = useFormContext()

  const { products } = useSelector((state: RootState) => state.cartReducer)

  const totalPriceInCart = useSelector(selectTotalPrice)

  return (
    <div className="flex flex-col gap-4 w-full lg:w-2/5">
      <h1 className={`${baloo700.className} text-base-subtitle text-lg`}>
        Produtos Selecionados
      </h1>
      <div className="flex  flex-col gap-6 p-10 bg-base-card rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-gradientee rounded-[6px 36px]">
        {products.length !== 0 ? (
          <div>
            {products?.map((product) => {
              return <CardCart key={product.id} product={product} />
            })}
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between text-xl text-base-subtitleh font-bold">
                <p>Total</p>
                <p>R$ {totalPriceInCart}</p>
              </div>
              <button
                disabled={isSubmitting}
                type="submit"
                form="form"
                className="uppercase w-full px-3 py-3 bg-yellow rounded"
              >
                confirmar pedido
              </button>
            </div>
          </div>
        ) : (
          <EmptyCart />
        )}
      </div>
    </div>
  )
}
