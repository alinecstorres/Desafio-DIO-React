import React from 'react'
import * as S from './styled'
import Line from '../../components/line'
import CertificadosPanel from './certificadosPanel'

function CERTIFICADOS() {
  return (
    <S.CERTIFICADOS>
      <Line/>
      <h1>Certificados</h1>
      <CertificadosPanel/>
    </S.CERTIFICADOS>
  )
}

export default CERTIFICADOS