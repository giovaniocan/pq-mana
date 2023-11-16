import { baloo800 } from '../../styles/fonts'
import { ProductCard } from './ProductCard'

export function ProductsList() {
  return (
    <div className="flex flex-col gap-14">
      <h2 className={`${baloo800.className} text-4xl text-base-subtitle`}>
        Nossos produtos
      </h2>
      <main className="flex gap-20 flex-wrap  ">
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
