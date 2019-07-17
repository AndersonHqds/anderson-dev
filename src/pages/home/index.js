import React from 'react';
import Lottie from '../../components/Lottie/Lottie'
import { LottieContainer, AndersonContainer, Container, Section, Title, Icons, AboutMeContainer, HalfContainer  } from './styled'
import Wrapper from '../../components/Wrapper/Wrapper'
import { FaLinkedin, FaGithub, FaYoutube, FaStackOverflow, FaCheckCircle, FaBook } from 'react-icons/fa'

const Home = () => {

    const simpleSection = { height: '500px', padding: '50px 0', overflow: 'hidden' }
    const checkColor = 'rgb(113, 89, 193)'
    const titleGray = { color: 'rgb(75, 75, 75)' }
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
                        <Title style={{ color: '#FFF' }}>Sobre Mim</Title>
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
                        <Title style={titleGray}>Cursos</Title>
                        <div><FaCheckCircle color={checkColor}/><span>Web moderno com Javascript</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Typescript - Evoluindo seu Javascript</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Descomplicando o css - SASS e Compass</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>De padrões a uma abordagem funcional - Javascript</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Criando progressive web apps - Crie apps offline</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Fundamentos da inteligência artificial</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Machine learning - Introdução aos algoritmos não supervisionado</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Machine learning - Sistemas de recomendação</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Machine learning - Classificação por trás dos panos</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Linguagem natural - Introdução ao NLP com análise de sentimentos</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Deep learning - Introdução ao Keras para reconhecimento de imagens</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Fundamentos da inteligência artificial</span></div>
                        <div><FaCheckCircle color={checkColor}/><span>Cursando English Live</span></div>
                    </HalfContainer>
                    <HalfContainer direction="column" className="qualificacao-container">
                        <Title style={titleGray}>Qualificações</Title>
                        <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 1</span></div>
                        <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 2</span></div>
                        <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 3</span></div>
                        <div><FaBook color={checkColor} /><span>Certificação TOEFL</span></div>
                        <div><FaBook color={checkColor} /><span>Certificação TOEIC</span></div>
                        <div><FaBook color={checkColor} /><span>Vencedor da maratona de programação da Fatec Americana</span></div>
                        <div><FaBook color={checkColor} /><span>Classificação para a maratona da SBC</span></div>
                    </HalfContainer>
                </Wrapper>
            </Section>    
        </Container>
    );
};

export default Home;