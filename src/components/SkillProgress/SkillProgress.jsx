import React from 'react';
import { FaNodeJs, FaPhp, FaWordpress, FaCss3Alt } from 'react-icons/fa'
import { ProgressBar } from './styled'
import CircularBar from './CircularBar'


const SkillProgress = (props) => {
    
    const percentageJavascript = 90
    const percentagePHP = 80
    const percentageWordpress = 75
    const percentageCss = 85
    const titleWhite = { color: "#FFF"}
    const { isAnimated } = props
    return (
        <>
            <ProgressBar>
                <CircularBar 
                    percentage={percentageJavascript} 
                    iconColor="green" 
                    titleColor={titleWhite} 
                    Icon={FaNodeJs} 
                    isAnimated={isAnimated}
                    type="Javascript"
                />
            </ProgressBar>
            <ProgressBar>
                <CircularBar 
                    percentage={percentageCss} 
                    iconColor="orange" 
                    titleColor={titleWhite} 
                    Icon={FaCss3Alt} 
                    isAnimated={isAnimated}
                    type="CSS"
                />
            </ProgressBar>
            <ProgressBar>
                <CircularBar 
                    percentage={percentagePHP} 
                    iconColor="white" 
                    titleColor={titleWhite} 
                    Icon={FaPhp} 
                    isAnimated={isAnimated}
                    type="PHP"
                />
            </ProgressBar>
            <ProgressBar>
                <CircularBar 
                    percentage={percentageWordpress} 
                    iconColor="black" 
                    titleColor={titleWhite} 
                    Icon={FaWordpress} 
                    isAnimated
                    type="Wordpress"
                />
            </ProgressBar>
        </>
    );
};

export default SkillProgress;