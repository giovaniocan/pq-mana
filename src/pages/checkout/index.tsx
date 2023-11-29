import { Header } from '@/components/Header'
import { FormAddress } from '@/components/checkout/FormAddress'
import { SummaryBill } from '@/components/checkout/SummaryBill'

import { useForm, FormProvider } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import { z } from 'zod'
import { useDispatch, useSelector } from 'react-redux'

import { cleanCart } from '@/redux/cart/slice'
import { useRouter } from 'next/router'
import { selectTotalPrice } from '@/redux/cart/cart.selector'
import { RootState } from '@/redux/rootReducer'
import { ArrowUUpLeft } from 'phosphor-react'

import Link from 'next/link'

const CreateFormSchema = z.object({
  name: z.string().nonempty('o nome da empresa é obrigatório'),
  phone: z.string().nonempty('o telefone é obrigatório'),
  address: z.string().nonempty('o endereço é obrigatório'),
  city: z.string().nonempty('a cidade é obrigatória'),
  cep: z.string().refine((data) => /^\d{8}$/.test(data), {
    message: 'O cep deve ter só números e 8 caractéres',
  }),
  number: z.string().nonempty('o número é obrigatório'),
  paymentMethod: z.string().refine((data) => data !== undefined, {
    message: 'Selecione um método de pagamento',
  }),
})

type CreateFormData = z.infer<typeof CreateFormSchema>

export default function Checkout() {
  const dispatch = useDispatch()
  const router = useRouter()

  const { products } = useSelector((state: RootState) => state.cartReducer)

  const filteredArray = products.map((product) => ({
    name: product.name,
    price: product.price,
    quantity: product.quantity,
  }))

  const totalPriceInCart = useSelector(selectTotalPrice)

  const createAdressForm = useForm<CreateFormData>({
    resolver: zodResolver(CreateFormSchema),
  })

  const { handleSubmit, reset } = createAdressForm

  async function handleSubmitForm(data: CreateFormData) {
    await console.log(data, filteredArray, totalPriceInCart)

    await router.push({
      pathname: '/success',
      query: data,
    })

    dispatch(cleanCart())
    reset()
  }

  return (
    <div className="bg-background h-screen mx-4 lg:px-36 flex flex-col ">
      <Header />

      <Link
        href="/"
        className="flex gap-2 items-center p-2 rounded-md relative"
      >
        <ArrowUUpLeft size={40} weight="fill" />
        <p className="text-xl font-medium">Voltar</p>
      </Link>

      <main className="mt-6 ">
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
