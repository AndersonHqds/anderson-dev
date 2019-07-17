import styled from 'styled-components';

export const ProgressBar = styled.div`
    width: ${ props => props.width ? props.width : "150px" }
    height: ${ props => props.height ? props.height : "150px" }
`