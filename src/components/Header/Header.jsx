import React, { useState, useEffect } from 'react';
import { Container, Logo, Navigation, NavigationMobile } from './styled'
import Wrapper from '../Wrapper/Wrapper.jsx'
import SwitchButton from '../SwitchButton/SwitchButton'
import Sidebar from '../../components/Sidebar/Sidebar'

import './style.css'

const Header = (props) => {

    const [ switchIsChecked, handleSwitch ] = useState(false)
    const [ isMobile, setMobile ] = useState(window.innerWidth < 1050)
    useEffect(() => {
        props.handleSwitch(switchIsChecked)
    }, [switchIsChecked])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(
                window.innerWidth < 1050
            )
        }, false)
    }, [])

    return (
        <>
        {
            isMobile && (
            <Sidebar>
                <NavigationMobile>
                    <a className="navigation" href="#aboutme">{ switchIsChecked ? "About Me" : "Sobre Mim" }</a>
                    <a className="navigation" href="#qualifications">{ switchIsChecked ? "Qualifications" : "Qualificações" }</a>
                    <a className="navigation" href="#languages">{ switchIsChecked ? "Languages" : "Linguagens" }</a>
                    <a className="navigation" href="#portfolio">Portfolio</a>
                    <SwitchButton removePipeChar={true} switchIsChecked={switchIsChecked} handleSwitch={ () => handleSwitch(!switchIsChecked) }/>                             
                </NavigationMobile>
            </Sidebar> 
            )
        }
        <Container id="page-wrap">
            <Wrapper>
                <Logo>
                    <img alt="logo" style={{ height: '35px', width: '35px', marginRight: '10px' }} src={ require('../../assets/imgs/logo.png') }/>
                    <span style={{fontWeight: 'bold'}}>AndersonDev</span>
                </Logo>
                <Navigation>
                    <a className="navigation" href="#aboutme">{ switchIsChecked ? "About Me" : "Sobre Mim" }</a>
                    <a className="navigation" href="#qualifications">{ switchIsChecked ? "Qualifications" : "Qualificações" }</a>
                    <a className="navigation" href="#languages">{ switchIsChecked ? "Languages" : "Linguagens" }</a>
                    <a className="navigation" href="#portfolio">Portfolio</a>
                    <SwitchButton switchIsChecked={switchIsChecked} handleSwitch={ () => handleSwitch(!switchIsChecked) }/>                             
                </Navigation>  
            </Wrapper>  
        </Container>
        </>
    );
};

export default Header;