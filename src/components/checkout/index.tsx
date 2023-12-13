import { FormAddress } from '@/components/checkout/adressFormComponents/FormAddress'
import { SummaryBill } from '@/components/checkout/summaryComponentes/SummaryBill'

import { FormProvider, useForm } from 'react-hook-form'
import { EmptyCart } from './EmptyCart'
import { CreateFormData } from '@/pages/checkout'
import { zodResolver } from '@hookform/resolvers/zod'
import { CreateFormSchema } from '@/lib/FormSchema'

interface FormComponentProps {
  isThereAnyProduct: boolean
  handleFormSubmit: (data: CreateFormData) => void
}

export function FormComponent({
  isThereAnyProduct,
  handleFormSubmit,
}: FormComponentProps) {
  const createAdressForm = useForm<CreateFormData>({
    resolver: zodResolver(CreateFormSchema),
  })

  const { handleSubmit } = createAdressForm

  return (
    <main className="mt-32 mb-8 md:mt-6 px-4 md:px-0 ">
      {isThereAnyProduct ? (
        <FormProvider {...createAdressForm}>
          <form
            id="form"
            onSubmit={handleSubmit(handleFormSubmit)}
            className="flex  flex-col md:flex-row gap-8"
          >
            <FormAddress />
            <SummaryBill />
          </form>
        </FormProvider>
      ) : (
        <EmptyCart />
      )}
    </main>
  )
}
