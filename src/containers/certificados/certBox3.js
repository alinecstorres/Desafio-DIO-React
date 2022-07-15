import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card3 from './card3';
import { CERT3 } from './styled';

class CertBox3 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card3/>
                </FrontSide>
                <BackSide>
                    <CERT3/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox3