import styled from "styled-components";
import background1 from '../../assets/cert-8FAD1676-introdução-reactjs.jpg'
import background2 from '../../assets/cert-9AAAA021-desenvolvimento-aplicações-reactjs.jpg'
import background3 from '../../assets/cert-29B24D9B-Introdução-JavaScript.jpg'
import background4 from '../../assets/cert-32B02E74-introdução-programação-pensamento-computacional.jpg'
import background5 from '../../assets/cert-32EC188A-introdução-react-hooks.jpg'
import background6 from '../../assets/cert-059E0A19-trabalhando-states-effects.jpg'
import background7 from '../../assets/cert-BC7B4C06-introdução-git-github.jpg'
import background8 from '../../assets/cert-EFCECA42-javascript-assincrono.jpg'

export const CERTIFICADOS = styled.div`
  background: #282c34;
  height: 100vh;
  width: 100vw;
  text-align: center;
  justify-content: center;
`;

export const CERTPANEL = styled.div`
  background: #282c34;
  text-align: center;
  height: 100vh;
  width: 100vw;
  align-items: center;  
  justify-content: space-evenly;
  display: flex;
  flex-container: row;
  flex-wrap: wrap;
  position: absolute;
`;

export const CARD1 = styled.div`
  background: #444B57;
  text-align: center;
  align-items: center;
  justify-content: center;
  display: flex;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT1 = styled.div`
  background-image: url(${background1});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;

`;

export const CERT2 = styled.div`
  background-image: url(${background2});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT3 = styled.div`
  background-image: url(${background3});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT4 = styled.div`
  background-image: url(${background4});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT5 = styled.div`
  background-image: url(${background5});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT6 = styled.div`
  background-image: url(${background6});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT7 = styled.div`
  background-image: url(${background7});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;

export const CERT8 = styled.div`
  background-image: url(${background8});
  background-repeat: no-repeat;
  background-size: cover;
  height: 220px;
  width: 300px;
  position: relative;
  cursor: pointer;
`;