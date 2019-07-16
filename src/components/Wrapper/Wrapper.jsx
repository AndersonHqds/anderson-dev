import React from 'react';

import { Container } from './styled';

const Wrapper = (props) => 
    <Container>
        { props.children } 
    </Container>
;

export default Wrapper;
