import React from 'react';
import { CircularProgressbarWithChildren, buildStyles } from 'react-circular-progressbar'
import AnimatedProgressProvider from './AnimatedProgressProvider'
import { easeQuadInOut } from "d3-ease"

const CircularBar = (props) => {
    const { percentage, iconColor, titleColor, Icon, type } = props
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
                        <Icon color={ iconColor } style={{ fontSize: 40 }}/>
                        <div style={{ ...titleColor, fontSize: 18, textAlign: "center" }}>
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