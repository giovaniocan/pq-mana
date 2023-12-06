import { Header } from '@/components/Header'
import { FormAddress } from '@/components/checkout/adressFormComponents/FormAddress'
import { SummaryBill } from '@/components/checkout/summaryComponentes/SummaryBill'

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
import { sendEmail } from '@/hooks/SendEmailFunction'
import { EmptyCart } from '@/components/checkout/EmptyCart'
import { CreateFormSchema } from '@/lib/FormSchema'
import { ToastyNotification } from '@/hooks/ToastyMessage'
import { NextSeo } from 'next-seo'

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
      sendEmail(templateParams)

      await router.push({
        pathname: '/success',
        query: data,
      })

      dispatch(cleanCart())
      reset()
    } catch (error) {
      ToastyNotification({
        message: 'Erro ao finalizar compra! Tente novamente mais tarde',
        type: 'error',
        whereInTheScreen: 'top-right',
      })
    }
  }

  return (
    <>
      <NextSeo
        title="Maná pão de queijo | Checkout"
        description="Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida."
        openGraph={{
          url: 'https://xn--manpodequeijo-5db5a.com.br/',
          title: 'Maná pão de queijo',
          description:
            'Descubra o sabor autêntico e irresistível do pão de queijo e chipa Maná em cada mordida.',
          siteName: 'Maná Pão de Queijo',
          locale: 'pt-Br',
          images: [
            {
              url: 'https://pq-mana-test-7y2ikyuzb-giovaniocan.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fintro-picture.80f8b354.jpg&w=1920&q=100',
              width: 300,
              height: 260,
              alt: 'Home Image',
            },
          ],
        }}
      />
      <div
        className={`${
          products.length > 0
            ? `h-full bg-background`
            : `h-screen bg-background`
        }`}
      >
        <div className=" lg:px-36 flex flex-col ">
          <Header />

          <Link
            href="/"
            className="hidden w-48 md:flex gap-2 mt-2 items-center p-2 rounded-md relative"
          >
            <ArrowUUpLeft size={40} weight="fill" />
            <p className="text-xl font-medium">Voltar</p>
          </Link>

          <main className="mt-32 mb-8 md:mt-6 px-4 md:px-0 ">
            {products.length > 0 ? (
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
            ) : (
              <EmptyCart />
            )}
          </main>
        </div>
      </div>
    </>
  )
}
