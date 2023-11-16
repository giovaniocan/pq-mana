import { baloo800 } from '../../styles/fonts'
import { ProductCard } from './ProductCard'

export function ProductsList() {
  return (
    <div className="flex mx-6 pb-6 md:mx-0 flex-col gap-14">
      <h2 className={`${baloo800.className} text-4xl text-base-subtitle`}>
        Nossos produtos
      </h2>
      <main className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {/* Adjust the number of ProductCard instances based on your actual data */}
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </main>
    </div>
  )
}
