import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { store } from '@/redux/store'
import Home from '@/pages/home'

describe('Teste do Header', () => {
  it('Deve renderizar o componente Header', () => {
    render(
      <Provider store={store}>
        <Home />
      </Provider>,
    )

    const textoEsperado = 'Pão de queijo'
    const teste = screen.getByText(textoEsperado)

    expect(teste).toBeInTheDocument()
  })
})
