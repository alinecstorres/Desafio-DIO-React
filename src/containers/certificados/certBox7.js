import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card7 from './card7';
import { CERT7 } from './styled';

class CertBox7 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card7/>
                </FrontSide>
                <BackSide>
                    <CERT7/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox7