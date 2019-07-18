import React from 'react';

import { Container } from './styled';

const Wrapper = (props) => 
    <Container style={props.style} reverse={ props.reverse }>
        { props.children } 
    </Container>
;

export default Wrapper;
