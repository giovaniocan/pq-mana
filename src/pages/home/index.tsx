import { Header } from '@/components/header/Header'
import { Intro } from '@/components/home/introComponents/Intro'
import { ProductsList } from '@/components/home/listComponents/ProductsList'

import { NextSeo } from 'next-seo'

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
    <>
      <NextSeo
        title="Maná pão de queijo"
        description="Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida."
        openGraph={{
          url: 'https://xn--manpodequeijo-5db5a.com.br/',
          title: 'Maná pão de queijo',
          description:
            'Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida.',
          siteName: 'Maná Pão de Queijo',
          locale: 'pt-Br',
          images: [
            {
              url: 'https://pq-mana-test-7y2ikyuzb-giovaniocan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintro-picture.80f8b354.jpg&w=1920&q=100',
              width: 300,
              height: 260,
              alt: 'Home Image',
            },
          ],
        }}
      />
      <main className="bg-background pb-6 lg:px-36 flex flex-col gap-6 md:gap-16">
        <Header />
        <Intro />
        <ProductsList />
      </main>
    </>
  )
}

/* export async function getStaticProps() {
  const res = await api.get('/products')
  const products = res.data


  return {
    props: {
      products,
    },
  }
} */
