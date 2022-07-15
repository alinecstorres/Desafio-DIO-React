import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card6 from './card6';
import { CERT6 } from './styled';

class CertBox6 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card6/>
                </FrontSide>
                <BackSide>
                    <CERT6/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox6