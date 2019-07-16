import React from 'react';
import { Container, Logo, Navigation } from './styled'
import Wrapper from '../Wrapper/Wrapper.jsx'
import './style.css'

const Header = () => {

    return (
        <Container>
            <Wrapper>
                <Logo>
                    <img alt="logo" style={{ height: '35px', width: '35px', marginRight: '10px' }} src={ require('../../assets/imgs/logo.png') }/>
                    <span style={{fontWeight: 'bold'}}>AndersonDev</span>
                </Logo>
                <Navigation>
                    <a className="navigation" href="#portfolio">Portfolio</a>
                    <a className="navigation" href="#contact">Contato</a>
                </Navigation>  
            </Wrapper>  
        </Container>
    );
};

export default Header;