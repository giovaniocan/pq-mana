import { Header } from '@/components/Header'
import { Intro } from '@/components/home/Intro'
import { ProductsList } from '@/components/home/ProductsList'

export default function Home() {
  return (
    <main className="bg-background px-36 flex flex-col gap-16">
      <Header />
      <Intro />
      <ProductsList />
    </main>
  )
}
