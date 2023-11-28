import { useFormContext } from 'react-hook-form'

interface Props {
  id: string
  label: string
  icon: any
}

export function PaymentOption({ id, label, icon }: Props) {
  const { register } = useFormContext()

  return (
    <div className="w-full lg:w-1/3">
      <label htmlFor={id} className="cursor-pointer">
        <input
          type="radio"
          id={id}
          className="hidden peer"
          value={id}
          {...register('paymentMethod')}
        />
        <div className="w-full p-3 border border-transparent peer-checked:border-purple peer-checked:bg-purple-light rounded-md bg-base-button flex items-center gap-3 font-medium text-xs uppercase transition duration-200 ease-in-out hover:bg-base-hover">
          {icon}
          {label}
        </div>
      </label>
    </div>
  )
}
