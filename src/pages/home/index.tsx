import { Header } from '@/components/Header'
import { Intro } from '@/components/home/Intro'

export default function Home() {
  return (
    <main className="bg-background h-screen w-screen px-36 ">
      <Header />
      <Intro />
    </main>
  )
}
