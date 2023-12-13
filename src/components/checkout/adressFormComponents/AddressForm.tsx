import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from './errors/ErrorsMessage'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 ">
        <input
          role="name-input"
          type="text"
          id="nome"
          /* aria-label="nome" */
          placeholder="Nome da empresa ou do proprietário"
          className="flex p-3 w-full sm:w-1/2 bg-base-input text-base-label focus:outline-yellow-dark"
          {...register('name')}
        />
        <ErrorMessage field="name" />
      </div>
      <div className="flex flex-col gap-1 ">
        <input
          role="phone-input"
          type="text"
          placeholder="Telefone para contato"
          className="flex p-3 w-full sm:w-1/2 bg-base-input text-base- focus:outline-yellow-dark"
          {...register('phone')}
        />
        <ErrorMessage field="phone" />
      </div>

      <div className="flex flex-col gap-1">
        <input
          role="address-input"
          type="text"
          placeholder="Endereço"
          className="flex p-3 w-full bg-base-input text-base- focus:outline-yellow-dark"
          {...register('address')}
        />
        <ErrorMessage field="address" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1 sm:w-1/2">
          <input
            role="city-input"
            type="text"
            placeholder="Cidade"
            className="flex p-3 w-full bg-base-input text-base- focus:outline-yellow-dark"
            {...register('city')}
          />
          <ErrorMessage field="city" />
        </div>

        <div className="flex flex-col gap-1 sm:w-1/3 mt-1">
          <input
            role="cep-input"
            type="text"
            placeholder="CEP"
            className="flex p-3 w-full bg-base-input text-base- focus:outline-yellow-dark"
            {...register('cep')}
          />
          <ErrorMessage field="cep" />
        </div>

        <div className="flex flex-col gap-1 sm:w-1/5 mt-1">
          <input
            role="number-input"
            type="text"
            placeholder="Número"
            className="flex p-3 w-full bg-base-input text-base- focus:outline-yellow-dark"
            {...register('number')}
          />
          <ErrorMessage field="number" />
        </div>
      </div>
    </div>
  )
}
