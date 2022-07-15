import React from 'react';
import * as S from './styled';

function Linkedin() {
  return (
    <S.Linkedin type='button' onClick={(e) => { e.preventDefault(); window.location.href='https://www.linkedin.com/in/aline-csts/'; }}>Linkedin</S.Linkedin>
  )
}

export default Linkedin