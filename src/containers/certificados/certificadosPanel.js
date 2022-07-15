import React from 'react';
import * as S from './styled';
import CertBox1 from './certBox1';
import CertBox2 from './certBox2';
import CertBox3 from './certBox3';
import CertBox4 from './certBox4';
import CertBox5 from './certBox5';
import CertBox6 from './certBox6';
import CertBox7 from './certBox7';
import CertBox8 from './certBox8';


function  CertificadosPanel() {
  return (
    <S.CERTPANEL>
      <CertBox1/>
      <CertBox2/>
      <CertBox3/>
      <CertBox4/>
      <CertBox5/>
      <CertBox6/>
      <CertBox7/>
      <CertBox8/>
    </S.CERTPANEL>
  )
}

export default CertificadosPanel