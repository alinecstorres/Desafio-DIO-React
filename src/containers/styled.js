import styled from "styled-components";
import background from '../assets/Aline.jpg'

export const HOME = styled.div`
    text-align: center;
    align-items: center;
    justify-content: center;
    position: relative;
    background: #444b57;
    height: 100vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;

export const IMAGEM = styled.div`
    background-image: url(${background});
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 50%;
    position: absolute;
    height: 250px;
    width: 250px;
    margin-bottom: 250px;
    box-shadow: 10px 5px 5px gray;
    border: 5px solid #282c34;
`;

export const CaixadeTexto = styled.div`
    margin-top: 250px;
`;

export const Bottoms = styled.div`
    margin-top: 30px;
    display: inline-flex;
`;

export const SOBRE = styled.div`
    margin-top: 80px;
    height: 100vh;
    width: 90vw;
    text-align: center;
    justify-content: center;
    
`;