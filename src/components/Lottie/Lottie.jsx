import React from 'react';
import Lottie from 'react-lottie'

const LottieAnimation = (props) => {

    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: props.animation,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return (
        <>
          <Lottie options={ defaultOptions }
            height={360}
            width={360}
            margin={0}
            isPaused={false}
            isStopped={false}
            isClickToPauseDisabled={true}
             />  
        </>
    );
};

export default LottieAnimation;