import React from 'react'

import { Container, Option, Img, Label } from './style.js'

import Salgados from '../../assets/imgs/salgados.jpg'
import paes from '../../assets/imgs/paes.jpg'
import cafe from '../../assets/imgs/cafe.jpg'
import docesebolos from '../../assets/imgs/docesebolos.jpg'
import bebida from '../../assets/imgs/bebidas.jpg'

const items = [
  {
    key: String(Math.random()),
    img: paes,
    label: 'Pães'
  },
  {
    key: String(Math.random()),
    img: cafe,
    label: 'Café'
  },
  {
    key: String(Math.random()),
    img: Salgados,
    label: 'Salgados'
  },
  {
    key: String(Math.random()),
    img: docesebolos,
    label: 'Bolos e Doces'
  },
  {
    key: String(Math.random()),
    img: bebida,
    label: 'Bebidas'
  }
]

export default function Options() {
  return (
    <Container>
      {items.map(item => (
        <Option key={item.key}>
          <Img source={item.img} />
          <Label>{item.label}</Label>
        </Option>
      ))}
    </Container>
  )
}
