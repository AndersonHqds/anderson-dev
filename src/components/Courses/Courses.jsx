import React from 'react';
import { FaCheckCircle, FaBook } from 'react-icons/fa'
import { Title } from './styled'

const checkColor = 'rgb(113, 89, 193)'
const titleGray = { color: 'rgb(75, 75, 75)' }

const Courses = (props) => {

    const { switchIsChecked } = props

    return (
        <>
            <Title style={titleGray}>{ switchIsChecked ? "Courses" : "Cursos" }</Title>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1-9UIiW3eu6AqJVpNoiFhoucoRHKi0Ttk">
                <span>{ switchIsChecked ? "Modern Web with Javascript" : "Web moderno com Javascript" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1hzO1AJhafqqnAUpFj0zLJCQbeNZDzecf">
                    <span>{ switchIsChecked ? "Typescript - Evolving Your Javascript" : "Typescript - Evoluindo seu Javascript" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1x6aG5q35fDJV37jr4dQWM0SldZR_bZPy">
                    <span>{ switchIsChecked ? "Uncomplicating css - SASS and Compass": "Descomplicando o css - SASS e Compass" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1bEhbUwkrx4zvwXrLpRk-pZ_7_004U3ME">
                    <span>{ switchIsChecked ? "From standards to a functional approach - Javascript": "De padrões a uma abordagem funcional - Javascript" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1df_VwQNGo8A4-zH2KQajqpUM14acuIuG">
                    <span>{ switchIsChecked ? "Creating progressive web apps - Create offline apps": "Criando progressive web apps - Crie apps offline" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1bg4xDMp7AtJgwTClnfWGkzwssO4GOmYv">
                    <span>{ switchIsChecked ? "Fundamentals of Artificial Intelligence": "Fundamentos da inteligência artificial" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1YJ9TRhG_hqUcJCypiFZj-uddnmdA_oa6">
                    <span>{ switchIsChecked ? "Machine learning - Introduction to unsupervised algorithms": "Machine learning - Introdução aos algoritmos não supervisionado" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1XXoVaRfZiOj640A9WcrD8C-rnboJubWl">
                    <span>{ switchIsChecked ? "Machine learning - Recommendation systems": "Machine learning - Sistemas de recomendação" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1yRDHBAxsCqnQxmGmHj1jtJvH7Y61y53D">
                    <span>{ switchIsChecked ? "Machine learning - Classification behind the cloths": "Machine learning - Classificação por trás dos panos" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1W5kZdRnUH_6AnW_P7rekAJKTFBzCjSYB">
                    <span>{ switchIsChecked ? "Natural language - Introduction to NLP with analysis of feelings": "Linguagem natural - Introdução ao NLP com análise de sentimentos" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1jfA4yOj9wUFYvmoaJ1rH6-ZBGx9T-j-N">
                    <span>{ switchIsChecked ? "Deep Learning - Introduction to Keras for Image Recognition": "Deep learning - Introdução ao Keras para reconhecimento de imagens" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaCheckCircle color={checkColor}/>
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1-9UIiW3eu6AqJVpNoiFhoucoRHKi0Ttk">
                    <span>{ switchIsChecked ? "Learning English Live": "Cursando English Live" }</span>
                </a>
            </div>  
        </>
    );
};

const Qualifications = (props) => {

    const { switchIsChecked } = props

    return (
        <>
            <Title style={titleGray}>{ switchIsChecked ? "Qualifications" : "Qualificações" }</Title>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/0B7e2qB1FuWDEV2F1Y3RzaTJ3dVE/view">
                    <span>{ switchIsChecked ? "Cisco Certification - CCNA 1": "Certificação Cisco - CCNA 1" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1brkAQKmpG1CtcYZj7P7LfSWMWA0yWLaZ/view">
                    <span>{ switchIsChecked ? "Cisco Certification - CCNA 2": "Certificação Cisco - CCNA 2" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rsQ0bRJ7MotxyRUWRK8JZdWAInoMCia-/view">
                    <span>{ switchIsChecked ? "Cisco Certification - CCNA 3": "Certificação Cisco - CCNA 3" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1S66te6XIqdrPX7dun1Z8eJW4ASmLSaWy">
                    <span>{ switchIsChecked ? "TOEFL Certification": "Certificação TOEFL" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1pZ8ycczPU2SvArS7oJWQaMOG_5my-m2k">
                    <span>{ switchIsChecked ? "TOEIC Certification": "Certificação TOEIC" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <a target="_blank" rel="noopener noreferrer" href="https://drive.google.com/open?id=1OQPJSieB6VDRD2RYvAIW91RHpppkDqpJ">
                    <span>{ switchIsChecked ? "Winner of the Fatec Americana programming marathon": "Vencedor da maratona de programação da Fatec Americana" }</span>
                </a>
            </div>
            <div className="qualification">
                <FaBook color={checkColor} />
                <span>{ switchIsChecked ? "Rated for the SBC marathon": "Classificação para a maratona da SBC" }</span>
            </div>
        </>
    )
}

export { Courses, Qualifications }