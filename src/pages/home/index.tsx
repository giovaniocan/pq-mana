import { Header } from '@/components/Header'
import { Intro } from '@/components/home/Intro'
import { ProductsList } from '@/components/home/ProductsList'
/* import { api } from '@/lib/axios' */

// tudo o que esta comentado quer dizer que é para quando tiver a api porém não esta pronta ainda kakakakakak

export interface ProductListProps {
  products: {
    id: string
    name: string
    image: string
    tags: string[]
    description: string
    price: number
  }[]
}

export default function Home(/* { products }: HomeProps */) {
  return (
    <main className="bg-background pb-6 lg:px-36 flex flex-col gap-6 md:gap-16">
      <Header />
      <Intro />
      <ProductsList />
    </main>
  )
}

/* export async function getStaticProps() {
  const res = await api.get('/products')
  const products = res.data

  console.log(products)

  return {
    props: {
      products,
    },
  }
} */
