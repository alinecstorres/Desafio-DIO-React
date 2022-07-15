import React from 'react';
import * as S from './styled';

function WhatsApp() {
  return (
    <S.WhatsApp type='button' onClick={(e) => { e.preventDefault(); window.location.href='https://wa.me/5581991282633?text=Olá,%20boa%20tarde!%20Gostaria%20de%20falar%20com%20você.'; }}>WhatsApp</S.WhatsApp>
  )
}

export default WhatsApp