import { CardCart } from './CardCart'

export function SummaryBill() {
  return (
    <div className="flex w-full lg:w-2/5 flex-col gap-6 p-10 bg-base-card rounded-tl-lg rounded-tr-3xl rounded-br-lg rounded-bl-3xl border-gradientee rounded-[6px 36px]">
      <CardCart />
      <CardCart />
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
  )
}
