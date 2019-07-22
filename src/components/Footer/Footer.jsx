import React from 'react';
import { Footer } from './styled'
import Wrapper from '../Wrapper/Wrapper'

const FooterContainer = (props) => {
    const { switchIsChecked } = props
    return (
        <Footer>
            <Wrapper>
                <span>{ switchIsChecked ? "Developed by " : "Desenvolvido por " }<b>AndersonDev</b></span>
            </Wrapper>
        </Footer>
    );
};

export default FooterContainer;