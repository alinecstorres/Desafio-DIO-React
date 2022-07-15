import React from 'react'
import * as S from './styled'
import Linkedin from '../components/buttoms/Linkedin'
import GitHub from '../components/buttoms/GitHub'
import WhatsApp from '../components/buttoms/WhatsApp'

function HOME() {
  return (
    <S.HOME>
      <S.IMAGEM></S.IMAGEM>
      <S.CaixadeTexto>
        <h1>Aline Torres</h1>Estudante de Programação
      </S.CaixadeTexto>
      <S.Bottoms>
        <Linkedin/>
        <GitHub/>
        <WhatsApp/>
      </S.Bottoms>
    </S.HOME>
  )
}

export default HOME