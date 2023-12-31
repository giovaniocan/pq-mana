import emailjs from '@emailjs/browser'

type EmailParams = {
  name: string
  number_phone: string
  rua: string
  number: string
  city: string
  cep: string
  payment_method: string
  products: string
  total_price: string | number
}

export const sendEmail = async (templateParams: EmailParams): Promise<void> => {
  try {
    const response = await emailjs.send(
      'service_kiey2mh',
      'template_c98l00h',
      templateParams,
      'FowWGjN7_YdysqRfB',
    )
  } catch (error) {
    console.error('Failed to send email:', error)
    throw new Error('Erro ao enviar o e-mail.') // Lança um erro em caso de falha
  }
}
