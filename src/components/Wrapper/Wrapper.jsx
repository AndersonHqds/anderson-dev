import React from 'react';

import { Container } from './styled';

const Wrapper = (props) => 
    <Container style={props.style}>
        { props.children } 
    </Container>
;

export default Wrapper;
