import React from 'react';
import Lottie from '../../components/Lottie/Lottie'
import { NinjaContainer, AndersonContainer, Container, IntroSection, Title, Icons } from './styled'
import Wrapper from '../../components/Wrapper/Wrapper'
import { FaLinkedin, FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'

const Home = () => {

    return (
        <Container>
            <Wrapper>
                <IntroSection>
                    <NinjaContainer>
                        <Lottie animation={require('../../assets/lottie/ninja.json')}/>
                    </NinjaContainer>
                    <AndersonContainer>
                        <Title style={{ textAlign: 'center' }}>AndersonHqds</Title>
                        <div><span>Web</span></div>
                        <div><span>Mobile</span></div>
                        <Icons>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/anderson-henrique-de-sa-silva"><FaLinkedin color="rgb(75, 75, 75)" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://github.com/AndersonHqds"><FaGithub color="rgb(75, 75, 75)" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://www.youtube.com/channel/UCd6VOf3e7CpH1xNz8FN9FPA"><FaYoutube color="rgb(75, 75, 75)" /></a>
                            <a target="_blank" rel="noopener noreferrer" href="https://pt.stackoverflow.com/users/68563/anderson-henrique"><FaStackOverflow color="rgb(75, 75, 75)" /></a>
                        </Icons>
                    </AndersonContainer>
                </IntroSection>
            </Wrapper>       
        </Container>
    );
};

export default Home;