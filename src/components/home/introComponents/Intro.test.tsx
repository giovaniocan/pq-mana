import { render, screen } from '@testing-library/react'
import { Intro } from './Intro'

describe('Intro Component', () => {
  it('Should render intro component and it is components', () => {
    render(<Intro />)

    const introtext = screen.getByText(
      'Descubra o sabor autêntico e irresistível do nosso pão de queijo em cada mordida',
    )
    expect(introtext).toBeInTheDocument()

    const introPraphesText = screen.getByText(
      'Compra simples, segura e prática',
    )
    expect(introPraphesText).toBeInTheDocument()

    const img = screen.getByRole('img')
    expect(img).toBeInTheDocument()
  })
})
