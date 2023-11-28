import { CurrencyDollarSimple, Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentOption } from './PaymentOptions'

export function PaymentMethod() {
  return (
    <div className="flex mt-5 flex-col p-10 gap-3 bg-base-card rounded-lg">
      <div className="flex gap-2">
        <CurrencyDollarSimple size={30} color="#8047F8" />
        <div>
          <p className="text-base-subtitle text-base">Pagamento</p>
          <p className="text-base-text text-base">
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-3 mt-8">
        <PaymentOption
          id="credit"
          label="Cartão de Crédito"
          icon={<CreditCard size={20} color="#8047F8" />}
        />
        <PaymentOption
          id="pix"
          label="PIX"
          icon={<Bank size={20} color="#8047F8" />}
        />
        <PaymentOption
          id="money"
          label="Dinheiro"
          icon={<Money size={20} color="#8047F8" />}
        />
      </div>
    </div>
  )
}
