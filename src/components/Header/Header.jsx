import React from 'react';
import { Container, Logo, Navigation } from './styled'
import Wrapper from '../Wrapper/Wrapper.jsx'

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img alt="logo" style={{ height: '35px', width: '35px', marginRight: '10px' }} src={ require('../../assets/imgs/logo.png') }/>
                    <span>aaaaaaaaaaa</span>
                </Logo>
                <Navigation>

                </Navigation>  
            </Wrapper>  
        </Container>
    );
};

export default Header;