import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card2 from './card2'
import { CERT2 } from './styled';

class CertBox2 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card2/>
                </FrontSide>
                <BackSide>
                    <CERT2/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox2