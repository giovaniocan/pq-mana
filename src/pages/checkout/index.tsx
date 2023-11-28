import { Header } from '@/components/Header'
import { FormAddress } from '@/components/checkout/FormAddress'
import { SummaryBill } from '@/components/checkout/SummaryBill'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'

const CreateFormSchema = z.object({
  name: z.string().nonempty('o nome da empresa é obrigatório'),
  address: z.string().nonempty('o endereço é obrigatório'),
  city: z.string().nonempty('a cidade é obrigatória'),
  cep: z.string().refine((data) => data.length === 8, {
    message: 'O cep deve ter só numeros',
  }),
  number: z.string().nonempty('o número é obrigatório'),
  paymentMethod: z
    .enum(['credit', 'pix', 'money'])
    .refine((data) => data !== undefined, {
      message: 'Selecione um método de pagamento',
    }),
})

type CreateFormData = z.infer<typeof CreateFormSchema> // inferindo o tipo de cada informação contida no meu formulario

export default function Checkout() {
  const createAdressForm = useForm<CreateFormData>({
    resolver: zodResolver(CreateFormSchema),
  })

  const { handleSubmit, watch, reset } = createAdressForm

  function handleSubmitForm(data: CreateFormData) {
    console.log(data)
    console.log('teste')
    reset()
  }

  return (
    <div className="bg-background h-screen mx-4 lg:px-36 flex flex-col gap-6 md:gap-16">
      <Header />
      <main>
        <FormProvider {...createAdressForm}>
          <form
            id="form"
            onSubmit={handleSubmit(handleSubmitForm)}
            className="flex  flex-col md:flex-row gap-8"
          >
            <FormAddress />
            <SummaryBill />
          </form>
        </FormProvider>
      </main>
    </div>
  )
}
