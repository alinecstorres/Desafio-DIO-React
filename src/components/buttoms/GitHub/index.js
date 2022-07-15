import React from 'react';
import * as S from './styled';

function GitHub() {
  return (
    <S.GitHub type='button' onClick={(e) => { e.preventDefault(); window.location.href='https://github.com/alinecstorres'; }}>GitHub</S.GitHub>
  )
}

export default GitHub