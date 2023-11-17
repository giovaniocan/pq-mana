import { Header } from '@/components/Header'
import { FormAddress } from '@/components/checkout/FormAddress'
import { SummaryBill } from '@/components/checkout/SummaryBill'

export default function Checkout() {
  return (
    <main className="bg-background h-screen mx-4 lg:px-36 flex flex-col gap-6 md:gap-16">
      <Header />
      <div className="flex  flex-col md:flex-row gap-8">
        <FormAddress />
        <SummaryBill />
      </div>
    </main>
  )
}
