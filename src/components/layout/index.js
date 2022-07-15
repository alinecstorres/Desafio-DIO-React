import { useRef } from 'react';
import { useActiveMenu } from 'react-active-menu'
import HOME from '../../containers/home';
import CERTIFICADOS from '../../containers/certificados/certificados';
import SOBRE from '../../containers/sobre';
import * as S from './styled'

function LAYOUT () {
    const scrollableRef = useRef();
    const {
        active,
        handleTriggerClick,
        registerSectionRef,
        registerTriggerRef,
    } = useActiveMenu();

    return (
        <>
            <S.HEADER>
                <S.BUTTON1
                    onClick={handleTriggerClick('Home')}
                    ref={registerTriggerRef('Home')}
                >
                    Home
                </S.BUTTON1>

                <S.BUTTON2
                    onClick={handleTriggerClick('Sobre')}
                    ref={registerTriggerRef('Sobre')}
                >
                    Sobre
                </S.BUTTON2>

                <S.BUTTON3
                    onClick={handleTriggerClick('Certificados')}
                    ref={registerTriggerRef('Certificados')}
                >
                    Certificados
                </S.BUTTON3> 
            </S.HEADER>
            <S.BODY ref={scrollableRef}>
                <section ref={registerSectionRef("Home")}>
                    <HOME/>
                </section>
                <section ref={registerSectionRef("Sobre")}>
                    <SOBRE/>
                </section>
                    <CERTIFICADOS/>
                <section ref={registerSectionRef("Certificados")}/>   
            </S.BODY>
        </>
    )
}


export default LAYOUT