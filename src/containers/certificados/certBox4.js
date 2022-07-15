import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card4 from './card4';
import { CERT4 } from './styled';

class CertBox4 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card4/>
                </FrontSide>
                <BackSide>
                    <CERT4/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox4