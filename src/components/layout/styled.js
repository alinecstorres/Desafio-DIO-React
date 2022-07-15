import styled from "styled-components";



export const HEADER =styled.div`
    flex-direction: row;
    position: absolute;
    position: fixed;
    z-index: 1;
    background-color: #282c34;
    min-height: 5vh;
    width: 100vw;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const BODY = styled.div`
    background-color: #282c34;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: calc(10px + 2vmin);
    color: white;
`;

export const BUTTON1 = styled.div`
    position: relative;
    display: inline-block;
    font-weight: bolder;
    padding: 10px 20px;
    cursor: pointer;
`;

export const BUTTON2 = styled.div`
    position: relative;
    display: inline-block;
    font-weight: bolder;
    padding: 10px 20px;
    cursor: pointer;
`;
export const BUTTON3 = styled.div`
    position: relative;
    display: inline-block;
    font-weight: bolder;
    padding: 10px 20px;
    cursor: pointer;
`;