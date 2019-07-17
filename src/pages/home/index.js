import React from 'react';
import Lottie from '../../components/Lottie/Lottie'
import { LottieContainer, AndersonContainer, Container, Section, Title, Icons, AboutMeContainer, HalfContainer  } from './styled'
import Wrapper from '../../components/Wrapper/Wrapper'
import CircleProgress from '../../components/SkillProgress/SkillProgress'
import { Courses, Qualifications } from '../../components/Courses/Courses'
import { FaLinkedin, FaGithub, FaYoutube, FaStackOverflow } from 'react-icons/fa'


import 'react-circular-progressbar/dist/styles.css'

const Home = () => {

    const simpleSection = { height: '500px', padding: '50px 0', overflow: 'hidden' }
    const titleWhite = { color: '#FFF' }
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
            <Section style={{ ...simpleSection, background: 'rgb(113, 89, 193)' }}>
                <Wrapper>
                    <LottieContainer style={{ alignItems: 'flex-start' }}>
                        <Lottie animation={require('../../assets/lottie/3018-man-and-chat.json')}/>
                    </LottieContainer>
                    <AboutMeContainer>
                        <Title style={titleWhite}>Sobre Mim</Title>
                        <p>Desenvolvedor web e mobile, iniciei a carreira trabalhando com PHP, Wordpress, desde criação de temas e plugins
                            até criação de sistemas webs com PHP puro. Também já desenvolvi projetos utilizando Python para gerênciar catracas de segurança.
                            Experiência com desenvolvimento para empresas do exterior, na região de Londres. Amante de programação e ativo na comunidade em eventos
                            de maratona de programação e palestras. Atualmente estou trabalhando com Javascript, cujo foi a linguagem que fez eu me empolgar mais ainda,
                            experiência com ReactJS, React Native, VueJS e AngularJS. No momento incluso em projetos utilizando inteligência artificial cujo eu desenvolvi utilizando python.
                        </p>
                    </AboutMeContainer>
                </Wrapper>
            </Section>
            <Section style={{ ...simpleSection, background: '#FFF' }}>
                <Wrapper>
                    <HalfContainer direction="column" className="cursos-container">
                        <Courses />
                    </HalfContainer>
                    <HalfContainer direction="column" className="qualificacao-container">
                        <Qualifications />
                    </HalfContainer>
                </Wrapper>
            </Section>
            <Section style={{ ...simpleSection, background: 'rgb(113, 89, 193)' }}>
                <Wrapper>
                    <HalfContainer width="40%" direction="column">
                        <Title style={titleWhite}>Anderson Henrique</Title>
                        <div>
                            <img style={{ borderRadius: '200px', height: '200px', width: '200px' }} src={ require('../../assets/imgs/anderson.jpeg') } alt="AndersonDev" />
                        </div>
                    </HalfContainer>
                    <HalfContainer width="60%" direction="column">
                        <Title style={titleWhite}>Linguagens</Title>
                        <HalfContainer width="100%" justify="space-around">
                            <CircleProgress />
                        </HalfContainer>
                    </HalfContainer>
                </Wrapper>
            </Section>    
        </Container>
    );
};

export default Home;