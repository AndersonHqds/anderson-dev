import React from 'react';
import Lottie from '../../components/Lottie/Lottie'
import { LottieContainer, AndersonContainer, Container, Section, Title, Icons, AboutMeContainer  } from './styled'
import Wrapper from '../../components/Wrapper/Wrapper'
import { FaLinkedin, FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'

const Home = () => {

    return (
        <Container>
            <Wrapper>
                <Section>
                    <LottieContainer>
                        <Lottie animation={require('../../assets/lottie/6936-class-ninjas-floating-ninja.json')}/>
                    </LottieContainer>
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
                </Section>
            </Wrapper>
            <Section style={{ background: 'rgb(113, 89, 193)'}}>
                <Wrapper>
                    <LottieContainer>
                        <Lottie animation={require('../../assets/lottie/3018-man-and-chat.json')}/>
                    </LottieContainer>
                    <AboutMeContainer>
                        <Title style={{ color: '#FFF' }}>Sobre Mim</Title>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </AboutMeContainer>
                </Wrapper>
            </Section>    
        </Container>
    );
};

export default Home;