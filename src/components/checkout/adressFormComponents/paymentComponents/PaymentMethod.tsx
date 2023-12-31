import { CurrencyDollarSimple, Bank, CreditCard, Money } from 'phosphor-react'
import { PaymentOption } from './PaymentOptions'
import { ErrorPaymenthMethoidError } from '../errors/ErrorPaymenthMethoidError'

import { useFormContext } from 'react-hook-form'

export function PaymentMethod() {
  const {
    formState: { errors },
  } = useFormContext()

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
          id="cartão de crédito"
          label="Cartão de Crédito"
          icon={<CreditCard size={20} color="#8047F8" />}
          role="credit-card"
        />
        <PaymentOption
          id="pix"
          label="PIX"
          icon={<Bank size={20} color="#8047F8" />}
          role="pix"
        />
        <PaymentOption
          id="dinheiro"
          label="Dinheiro"
          icon={<Money size={20} color="#8047F8" />}
          role="money"
        />
      </div>
      {errors.paymentMethod && <ErrorPaymenthMethoidError />}
    </div>
  )
}
