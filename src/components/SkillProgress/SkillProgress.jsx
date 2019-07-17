import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import { FaNodeJs, FaPhp, FaWordpress, FaCss3Alt } from 'react-icons/fa'
import { ProgressBar } from './styled'

const SkillProgress = () => {
    
    const percentageJavascript = 90
    const percentagePHP = 80
    const percentageWordpress = 75
    const percentageCss = 85
    const titleWhite = { color: "#FFF"}
    
    return (
        <>
            <ProgressBar>
                <CircularProgressbarWithChildren styles={buildStyles({ trailColor: "#937fd4", pathColor: "white"  })} value={percentageJavascript}>
                    <FaNodeJs color="green" style={{ fontSize: 40 }}/>
                    <div style={{ ...titleWhite, fontSize: 18, textAlign: "center" }}>
                        <div><strong>Javascript</strong></div>
                        <strong>{percentageJavascript}%</strong>
                    </div>
                </CircularProgressbarWithChildren>
            </ProgressBar>
            <ProgressBar>
                <CircularProgressbarWithChildren styles={buildStyles({ trailColor: "#937fd4", pathColor: "white"  })} value={percentageCss}>
                    <FaCss3Alt color="orange" style={{ fontSize: 40 }}/>
                    <div style={{ ...titleWhite, fontSize: 18, textAlign: "center" }}>
                        <div><strong>CSS</strong></div>    
                        <strong>{percentageCss}%</strong>
                    </div>
                </CircularProgressbarWithChildren>
            </ProgressBar>
            <ProgressBar>
                <CircularProgressbarWithChildren styles={buildStyles({ trailColor: "#937fd4", pathColor: "white"  })} value={percentagePHP}>
                    <FaPhp color="white" style={{ fontSize: 40 }}/>
                    <div style={{ ...titleWhite, fontSize: 18, textAlign: "center" }}>
                        <div><strong>PHP</strong></div>
                        <strong>{percentagePHP}%</strong>            
                    </div>
                </CircularProgressbarWithChildren>
            </ProgressBar>
            <ProgressBar>
                <CircularProgressbarWithChildren styles={buildStyles({ trailColor: "#937fd4", pathColor: "white"  })} value={percentageWordpress}>
                    <FaWordpress style={{ fontSize: 40 }}/>
                    <div style={{ ...titleWhite, fontSize: 18, textAlign: "center" }}>
                        <div><strong>Wordpress</strong></div>
                        <strong>{percentageWordpress}%</strong>
                    </div>
                </CircularProgressbarWithChildren>
            </ProgressBar>
        </>
    );
};

export default SkillProgress;