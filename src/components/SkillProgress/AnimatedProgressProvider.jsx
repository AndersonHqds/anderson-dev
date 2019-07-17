import React from "react";
import { Animate } from "react-move";

const AnimatedProgressProvider = (props) => {

    const valueStart = 0
    return (
        <Animate
            start={() => ({
            value: valueStart
            })}
            update={() => ({
            value: [
                props.isAnimated ? props.valueEnd : props.valueStart
            ],
            timing: {
                duration: props.duration * 1000,
                ease: props.easingFunction
            }
            })}
        >
        {({ value }) => props.children(value)}
      </Animate>
    );
};

export default AnimatedProgressProvider;
