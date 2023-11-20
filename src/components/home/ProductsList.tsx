import { baloo800 } from '../../styles/fonts'
import { ProductCard } from './ProductCard'

export function ProductsList() {
  return (
    <div className="flex  md:mx-4 flex-col gap-14">
      <h2 className={`${baloo800.className} text-4xl text-base-subtitle`}>
        Nossos produtos
      </h2>
      <main className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
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
