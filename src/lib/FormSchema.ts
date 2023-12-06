import { z } from 'zod'

export const CreateFormSchema = z.object({
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
