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
import { sendEmail } from '@/utils/SendEmailFunction'
import { toast } from 'react-toastify'

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
    produto: product.name,
    quantidade: product.quantity,
  }))

  const formattedProducts = filteredArray
    .map((product) => {
      return `${product.produto}  ---  Quantidade: ${product.quantidade}`
    })
    .join('\n')

  const totalPriceInCart = useSelector(selectTotalPrice)

  const createAdressForm = useForm<CreateFormData>({
    resolver: zodResolver(CreateFormSchema),
  })

  const { handleSubmit, reset } = createAdressForm

  async function handleSubmitForm(data: CreateFormData) {
    const templateParams = {
      name: data.name,
      number_phone: data.phone,
      rua: data.address,
      number: data.number,
      city: data.city,
      cep: data.cep,
      payment_method: data.paymentMethod,
      products: formattedProducts,
      total_price: totalPriceInCart,
    }

    try {
      await sendEmail(templateParams)

      await router.push({
        pathname: '/success',
        query: data,
      })

      dispatch(cleanCart())
      reset()
    } catch (error) {
      toast.error('Erro ao finalizar compra! Tente novamente mais tarde', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'colored',
      })
    }
  }

  return (
    <div className="bg-background h-screen mx-4 lg:px-36 flex flex-col ">
      <Header />

      <Link
        href="/"
        className="hidden md:flex gap-2 items-center p-2 rounded-md relative"
      >
        <ArrowUUpLeft size={40} weight="fill" />
        <p className="text-xl font-medium">Voltar</p>
      </Link>

      <main className=" mt-8 md:mt-6  ">
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
