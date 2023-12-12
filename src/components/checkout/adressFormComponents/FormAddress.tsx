import { MapPin } from 'phosphor-react'
import { baloo700 } from '../../../styles/fonts'
import { AddressForm } from './AddressForm'
import { PaymentMethod } from './paymentComponents/PaymentMethod'

export function FormAddress() {
  return (
    <div role="form-addres" className="w-full sm:w-3/5">
      <h1 className={`${baloo700.className} text-base-subtitle text-lg`}>
        Complete seu pedido
      </h1>
      <div className="flex mt-4 flex-col p-10 gap-8 bg-base-card rounded-lg shadow-md">
        <div className="flex gap-2">
          <MapPin size={30} color="#C47F17" />
          <div>
            <p className="text-base-subtitle text-base">Endereço de Entrega</p>
            <p className="text-base-text text-base">
              Informe o endereço onde deseja receber seu pedido
            </p>
          </div>
        </div>
        <AddressForm />
      </div>
      <PaymentMethod />
    </div>
  )
}
