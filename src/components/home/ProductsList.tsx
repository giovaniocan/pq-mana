import { baloo800 } from '../../styles/fonts'
import { ProductCard } from './ProductCard'

import { Cards } from '@/utils/CardsContent'

export function ProductsList() {
  return (
    <div className="px-4 lg:px-0">
      <h2 className={`${baloo800.className} text-4xl text-base-subtitle`}>
        Nossos produtos
      </h2>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
        {/* Adjust the number of ProductCard instances based on your actual data */}
        {Cards.map((card) => {
          return <ProductCard key={card.id} product={card} />
        })}
      </main>
    </div>
  )
}
