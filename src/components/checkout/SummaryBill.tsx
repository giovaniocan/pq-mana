import { CardCart } from './CardCart'
import { baloo700 } from '../../styles/fonts'

import { useSelector } from 'react-redux/es/hooks/useSelector'
import { RootState } from '@/redux/rootReducer'

export function SummaryBill() {
  const { products } = useSelector((state: RootState) => state.cartReducer)

  console.log(products)

  return (
    <div className="flex flex-col gap-4 w-full lg:w-2/5">
      <h1 className={`${baloo700.className} text-base-subtitle text-lg`}>
        Produtos Selecionados
      </h1>
      <div className="flex  flex-col gap-6 p-10 bg-base-card rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-gradientee rounded-[6px 36px]">
        {products.map((product) => {
          return <CardCart key={product.id} product={product} />
        })}
        <div className="flex flex-col gap-6">
          <div className="flex items-center justify-between text-xl text-base-subtitleh font-bold">
            <p>Total</p>
            <p>R$ 100,00</p>
          </div>
          <button className="uppercase w-full px-3 py-3 bg-yellow rounded">
            confirmar pedido
          </button>
        </div>
      </div>
    </div>
  )
}
