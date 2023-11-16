import { ShoppingCart, Package, Timer, Coffee } from 'phosphor-react'
import { FeatureParagraph } from './FeatureParagraph'

export function IntroParagraphs() {
  return (
    <>
      <FeatureParagraph
        text="Compra simples, segura e prática"
        icon={ShoppingCart}
        bgColor="bg-yellow-dark"
      />
      <FeatureParagraph
        text="Os produtos são 100% refrigerados e lacrados"
        icon={Package}
        bgColor="bg-yellow"
      />
      <FeatureParagraph
        text="Entrega rápida e confiável"
        icon={Timer}
        bgColor="bg-base-text"
      />
      <FeatureParagraph
        text="Sabores que acompanham tudo!"
        icon={Coffee}
        bgColor="bg-purple"
      />
    </>
  )
}
