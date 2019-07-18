import React, { useEffect, useState } from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import { easeQuadInOut } from "d3-ease"

const CircularBar = (props) => {
    const { percentage, iconColor, titleColor, Icon, type } = props
    const [ isMobile, setMobile ] = useState(window.innerWidth < 1050)
    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobile(
                window.innerWidth < 1050
            )
        }, false)
    }, [])
    const fontPercentage = isMobile ? 10 : 18
    const fontLanguage = isMobile ? 30 : 40
    return (
        
        <AnimatedProgressProvider
                valueStart={0}
                valueEnd={percentage}
                duration={1.4}
                isAnimated={props.isAnimated}
                easingFunction={easeQuadInOut}
            >
            {value => {
                const roundedValue = Math.round(value);
                return ( 
                    <CircularProgressbarWithChildren styles={buildStyles({ trailColor: "#937fd4", pathColor: "white", pathTransition: "none"  })} value={value}>
                        <Icon color={ iconColor } style={{ fontSize: fontLanguage }}/>
                        <div style={{ ...titleColor, fontSize: fontPercentage, textAlign: "center" }}>
                            <div><strong>{ type }</strong></div>
                            <strong>{roundedValue}%</strong>
                        </div>
                    </CircularProgressbarWithChildren>
                );
            }}
                
        </AnimatedProgressProvider>
    );
};

export default CircularBar;