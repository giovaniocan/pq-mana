import { useFormContext } from 'react-hook-form'
import { ErrorMessage } from './form/ErrorsMessage'

export function AddressForm() {
  const { register } = useFormContext()

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-1 ">
        <input
          type="text"
          placeholder="Nome da empresa"
          className="flex p-3 w-full sm:w-1/2 bg-base-input text-base-label"
          {...register('name')}
        />
        <ErrorMessage field="name" />
      </div>

      <div className="flex flex-col gap-1">
        <input
          type="text"
          placeholder="Endereço"
          className="flex p-3 w-full bg-base-input text-base-label"
          {...register('address')}
        />
        <ErrorMessage field="address" />
      </div>

      <div className="flex flex-col sm:flex-row gap-3">
        <div className="flex flex-col gap-1 sm:w-1/2">
          <input
            type="text"
            placeholder="Cidade"
            className="flex p-3 w-full bg-base-input text-base-label"
            {...register('city')}
          />
          <ErrorMessage field="city" />
        </div>

        <div className="flex flex-col gap-1 sm:w-1/3 mt-1">
          <input
            type="text"
            placeholder="CEP"
            className="flex p-3 w-full bg-base-input text-base-label"
            {...register('cep')}
          />
          <ErrorMessage field="cep" />
        </div>

        <div className="flex flex-col gap-1 sm:w-1/5 mt-1">
          <input
            type="text"
            placeholder="Número"
            className="flex p-3 w-full bg-base-input text-base-label"
            {...register('number')}
          />
          <ErrorMessage field="number" />
        </div>
      </div>
    </div>
  )
}
