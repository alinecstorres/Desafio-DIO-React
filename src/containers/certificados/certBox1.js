import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card1 from './card1';
import { CERT1 } from './styled';

class CertBox1 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card1/>
                </FrontSide>
                <BackSide>
                    <CERT1/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox1