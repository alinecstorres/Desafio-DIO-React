import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card8 from './card8';
import { CERT8 } from './styled';

class CertBox8 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card8/>
                </FrontSide>
                <BackSide>
                    <CERT8/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox8