import React, { useEffect, useState } from 'react';
import ScrollableAnchor from 'react-scrollable-anchor'
import Lottie from '../../components/Lottie/Lottie'
import { Row, LottieContainer, AndersonContainer, Container, Section, Title, Icons, AboutMeContainer, HalfContainer  } from './styled'
import Wrapper from '../../components/Wrapper/Wrapper'
import CircleProgress from '../../components/SkillProgress/SkillProgress'
import { Courses, Qualifications } from '../../components/Courses/Courses'
import { FaLinkedin, FaGithub, FaYoutube, FaStackOverflow, FaBehance } from 'react-icons/fa'
import Card from '../../components/Card/Card'

import 'react-circular-progressbar/dist/styles.css'

const Home = (props) => {
    const [ isAnimated, setAnimated ] = useState(false)
    const { switchIsChecked } = props

    const simpleSection = { height: '500px', padding: '50px 0', overflow: 'hidden' }
    const titleWhite = { color: '#FFF' }
    const courseAndQualification = {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
        width: "1000px",
        flexWrap: "wrap",
        maxWidth: "100%"
    }
    const titleGray = { color: 'rgb(75, 75, 75)' }
    const isBottom = (el) => el.getBoundingClientRect().bottom <= window.innerHeight

    const trackScrolling = () => {
        const wrappedElement = document.querySelector('.skills')
        if (isBottom(wrappedElement)) {
          setAnimated(true)
          document.removeEventListener('scroll', trackScrolling);
        }
    }

    useEffect(() => {
        document.addEventListener('scroll', trackScrolling)
    })

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
                            <a target="_blank" rel="noopener noreferrer" href="https://behance.net/contatoahenrique"><FaBehance color="rgb(75, 75, 75)" /></a>                       
                        </Icons>
                    </AndersonContainer>
                </Section>
            </Wrapper>
            <ScrollableAnchor id={'aboutme'}>
                <Section style={{ ...simpleSection, background: 'rgb(113, 89, 193)' }}>
                    <Wrapper>
                        <LottieContainer style={{ alignItems: 'flex-start' }}>
                            <Lottie animation={require('../../assets/lottie/3018-man-and-chat.json')}/>
                        </LottieContainer>
                        <AboutMeContainer>
                            <Title style={titleWhite}>{ switchIsChecked ? "About Me" : "Sobre Mim"}</Title>
                            <p>{ 
                                switchIsChecked ? 
                                `Web and mobile developer, I started the career working with PHP, Wordpress, since theme creation and plugins
                                to creating web systems with pure PHP. I have also developed projects using Python to manage security turnstiles.
                                Experience with development for foreign companies in the London region. Lover of programming and active in the community in events
                                programming marathon and lectures. I'm currently working with Javascript, which was the language that made me even more excited,
                                experience with ReactJS, React Native, VueJS and AngularJS. At the moment included in projects using artificial intelligence whose I developed using python.`
                                :
                                `Desenvolvedor web e mobile, iniciei a carreira trabalhando com PHP, Wordpress, desde criação de temas e plugins
                                até criação de sistemas webs com PHP puro. Também já desenvolvi projetos utilizando Python para gerênciar catracas de segurança.
                                Experiência com desenvolvimento para empresas do exterior, na região de Londres. Amante de programação e ativo na comunidade em eventos
                                de maratona de programação e palestras. Atualmente estou trabalhando com Javascript, cujo foi a linguagem que fez eu me empolgar mais ainda,
                                experiência com ReactJS, React Native, VueJS e AngularJS. No momento incluso em projetos utilizando inteligência artificial cujo eu desenvolvi utilizando python.`
                            }
                            </p>
                            
                        </AboutMeContainer>
                    </Wrapper>
                </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'qualifications'}>
                <Section style={{ ...simpleSection, background: '#FFF', height: 'auto' }}>
                    <Wrapper style={courseAndQualification}>
                        <HalfContainer direction="column" className="cursos-container">
                            <Courses switchIsChecked={ switchIsChecked }/>
                        </HalfContainer>
                        <HalfContainer direction="column" className="qualificacao-container">
                            <Qualifications switchIsChecked={ switchIsChecked } />
                            <LottieContainer height="auto">
                                <Lottie animation={require('../../assets/lottie/7469-personal-mac-night.json')}/>
                            </LottieContainer>
                        </HalfContainer>
                    </Wrapper>
                </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'languages'}>
                <Section className="skills" style={{ ...simpleSection, background: 'rgb(113, 89, 193)' }}>
                    <Wrapper>
                        <HalfContainer width="40%" direction="column">
                            <Title style={titleWhite}>Anderson Henrique</Title>
                            <div className="description">
                                <img style={{ borderRadius: '200px', height: '200px', width: '200px' }} src={ require('../../assets/imgs/anderson.jpeg') } alt="AndersonDev" />
                                <p>
                                    { 
                                        switchIsChecked ? 
                                        `Developer graduated in systems analysis and development, loves to mess with security too, HackTheBox user (Pentest Lab). Find me there, follow my `
                                            :
                                        `Desenvolvedor formado em análise e desenvolvimento de sistemas, adora mexer com segurança também,
                                        usuário do HackTheBox (Laboratório Pentest). Me encontra lá, segue meu `      
                                    }
                                    {
                                        switchIsChecked ? (<a target="_blank" rel="noopener noreferrer" href="https://www.hackthebox.eu/profile/18622">profile.</a>) : (<a target="_blank" rel="noopener noreferrer" href="https://www.hackthebox.eu/profile/18622"> perfil.</a>)
                                    }
                                    <br/><br/>
                                    <b>
                                        {
                                            switchIsChecked ? "Publications:" : "Publicações:"   
                                        }
                                    </b>
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.matera.com/blog/post/o-que-e-inteligencia-artificial">{ switchIsChecked ? "What is artificial inteligence (PT-Br)" : "O que é inteligência artificial" }</a>,
                                    <a target="_blank" rel="noopener noreferrer" href="http://www.matera.com/blog/post/aplicacoes-mobile-multiplataforma-com-react-native-e-expo">{ switchIsChecked ? "Cross-platform mobile applications with React Native and Expo (PT-Br)" : "Aplicações mobile multiplataforma com React Native e Expo" }</a>,
                                    <a target="_blank" rel="noopener noreferrer" href="https://nsworld.com.br/a-magia-pdo-do-php/">{ switchIsChecked ? "The magic of php pdo (PT-Br)" : "A magia do PDO do PHP" }</a>
                                </p>
                            </div>
                        </HalfContainer>
                        <HalfContainer width="60%" direction="column">
                            <Title style={titleWhite}>{ switchIsChecked ? "Languages" : "Linguagens" }</Title>
                            <HalfContainer width="100%" justify="space-around">
                                <CircleProgress isAnimated={isAnimated} />
                            </HalfContainer>
                        </HalfContainer>
                    </Wrapper>
                </Section>
            </ScrollableAnchor>
            <ScrollableAnchor id={'portfolio'}> 
                <Section style={{ ...simpleSection, background: '#FFF', height: 'auto' }}>
                    <Row><Title style={titleGray}>Portfolios</Title></Row>
                    <Row>
                        <Card 
                            image={require('../../assets/imgs/daune.png')} 
                            imageTitle={ switchIsChecked ? "Daune Pillows" : "Daune Travesseiros" }
                            title={ switchIsChecked ? "Daune Pillows" : "Daune Travesseiros" }
                            shortDescription={ switchIsChecked ? "Theme creation wordpress, PHP, Javascript, CSS" : "Criação de tema wordpress, PHP, Javascript, CSS" }
                            description={ 
                                switchIsChecked ? 
                                "Speed ​​improvement with google page speed module, SEO techniques, responsiveness, template creation"
                                : 
                                "Melhoria de velocidade com módulo do google page speed, técnicas de SEO, responsividade, criação de template"
                            }
                            link="https://www.daune.com.br"
                        />
                        <Card 
                            image={require('../../assets/imgs/cheapremovals.png')} 
                            imageTitle="Cheap Removals"
                            title="Cheap Removals"
                            shortDescription={ switchIsChecked ? "Creation of wordpress theme for London company, PHP, Javascript, CSS, Freight Calculator with routes" : "Criação de tema wordpress para empresa de Londres, PHP, Javascript, CSS, Calculador de frete com rotas" }
                            description={ 
                                switchIsChecked ? 
                                "Speed ​​enhancement with google page speed module, SEO techniques, responsiveness, template creation, route calculation, time and freight value from selected mobile"
                                : 
                                "Melhoria de velocidade com módulo do google page speed, técnicas de SEO, responsividade, criação de template, calculo de rota, tempo e valor de frete a partir de móveis selecionados"
                            }
                            link="https://www.cheapremovals.com"
                        />
                        <Card 
                            image={require('../../assets/imgs/audit.png')} 
                            imageTitle="Audit System"
                            title="Audit System"
                            shortDescription={ switchIsChecked ? "Creating Audit System Using React and Nodejs" : "Criação de sistema de auditoria utilizando React e Nodejs" }
                            description={ 
                                switchIsChecked ? 
                                "The system consists of auditing pubs known as pubs in London, was used image upload, application deploy frontend and backend"
                                : 
                                "O Sistema consiste em fazer auditoria de pubs conhecidos como bares em Londres, Foi utilizado upload de imagens, Deploy de aplicação frontend e backend"
                            }
                            link="#portfolio"
                        />

                        <Card 
                            image={require('../../assets/imgs/geek.png')} 
                            imageTitle="GeekOS"
                            title="GeekOS"
                            shortDescription={ switchIsChecked ? "Simple website using HTML, CSS and Javascript, made for my mini course taught on youtube." : "Simples site utilizando HTML, CSS e Javascript, feito para meu mini curso ministrado no youtube." }
                            description={ 
                                switchIsChecked ? 
                                "In this course I show how to develop a simple website with a beautiful and modern layout, using flex-box, parallax effects and techniques with javascript"
                                : 
                                "Nesse curso eu mostro como desenvolver um site simples e com o layout bonito e moderno, utilizando flex-box, efeitos parallax e técnicas com javascript"
                            }
                            link="https://www.youtube.com/watch?v=QIkrgXlCNAQ&list=PL4lY6h8wmN62MMpAmdVBG0OC6hALTTkJp"
                        />
                    </Row>
                    <Row>
                        <Card 
                                image={require('../../assets/imgs/devanderson.png')} 
                                imageTitle="Devanderson"
                                title="Devanderson"
                                shortDescription={ switchIsChecked ? "My old portfolio website using HTML, CSS and Javascript" : "Meu antigo site de portfolio usando HTML, CSS e Javascript" }
                                description={ 
                                    switchIsChecked ? 
                                    "Effects using Javascript, Practices using photoshop and responsiveness"
                                    : 
                                    "Efeitos usando Javascript, Praticas com photoshop e responsividade"
                                }
                                link="http://devanderson.000webhostapp.com"
                        />
                        <Card 
                                image={require('../../assets/imgs/smarthome.png')} 
                                imageTitle="SmartHome"
                                title="SmartHome"
                                shortDescription={ switchIsChecked ? "Application to automate the house, With it, you can turn the lights, Fans on or off using voice commands or tapping on the button." : "Aplicativo para automatizar a casa, com ele é possivel ligar luz e ventilador e também apagar, é possível também checar nível de água da caixa. Os comandos podem ser acionados por voz ou botão." }
                                description={ 
                                    switchIsChecked ? 
                                    "On this project I used Arduino ( C Language ), React Native. The control is throught the bluetooth and voice control using Text To Speach and Speach To Text"
                                    : 
                                    "Nesse projeto eu utilizei Arduino ( Linguagem C ), React Native. Controle através do módulo bluetooth e controle de voice usando Text To Speach e Speach To Text"
                                }
                                link="https://github.com/AndersonHqds/smarthouse-react-native"
                        />
                        <Card 
                                image={require('../../assets/imgs/housecode.png')} 
                                imageTitle="Housecode"
                                title="Housecode"
                                shortDescription={ switchIsChecked ? "Website to show the old web sites that I've been developed" : "Website para mostrar os antigos sites que eu desenvolvi" }
                                description={ 
                                    switchIsChecked ? 
                                    "Effects using Javascript, Send e-mail using PHP, HTML, CSS"
                                    : 
                                    "Efeitos usando Javascript, Envio de e-mail usando PHP, HTML e CSS"
                                }
                                link="http://housecode.000webhostapp.com"
                        />
                        <Card 
                                image={require('../../assets/imgs/westone.png')} 
                                imageTitle="Westone"
                                title="Westone"
                                shortDescription={ switchIsChecked ? "I developed a Wordpress Template and Plugin for a London company, the plugin manage job vacancies and candidates." : "Eu desenvolvi um tema para Wordpress e um plugin para controle de vagas de emprego e candidatos. Esse tema foi feito para uma empresa de Londres." }
                                description={ 
                                    switchIsChecked ? 
                                    "Ajax requests, WP Hooks, SEO Practices, Wordpress Database management"
                                    : 
                                    "Requisições Ajax, Hooks do Wordpress, Praticas de SEO e Gerencia de banco de dados do Wordpress."
                                }
                                link="https://www.westonerecruit.co.uk"
                        />
                    </Row>
                </Section>
            </ScrollableAnchor>    
        </Container>
    );
};

export default Home;