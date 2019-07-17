import React from 'react';
import { FaCheckCircle, FaBook } from 'react-icons/fa'
import { Title } from './styled'

const checkColor = 'rgb(113, 89, 193)'
const titleGray = { color: 'rgb(75, 75, 75)' }

const Courses = () => {
    return (
        <>
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
        </>
    );
};

const Qualifications = () => {
    return (
        <>
            <Title style={titleGray}>Qualificações</Title>
            <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 1</span></div>
            <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 2</span></div>
            <div><FaBook color={checkColor} /><span>Certificação Cisco - CCNA 3</span></div>
            <div><FaBook color={checkColor} /><span>Certificação TOEFL</span></div>
            <div><FaBook color={checkColor} /><span>Certificação TOEIC</span></div>
            <div><FaBook color={checkColor} /><span>Vencedor da maratona de programação da Fatec Americana</span></div>
            <div><FaBook color={checkColor} /><span>Classificação para a maratona da SBC</span></div>
        </>
    )
}

export { Courses, Qualifications }