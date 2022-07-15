import React, { Component } from 'react';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import Card5 from './card5';
import { CERT5 } from './styled';

class CertBox5 extends Component {
    render() {
        return(
            <Flippy
                flipOnClick={true}
                flipDirection="horizontal"
            >
                <FrontSide>
                    <Card5/>
                </FrontSide>
                <BackSide>
                    <CERT5/>
                </BackSide>
            </Flippy>
        )
    }

}

export default CertBox5