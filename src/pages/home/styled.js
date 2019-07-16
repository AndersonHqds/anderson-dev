import styled from 'styled-components';
import 'typeface-notable'
import 'typeface-lobster'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
`

export const NinjaContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: ${ window.screen.height - 80 }px
`;

export const AndersonContainer = styled.div`
    width: 50%;
    color: rgb(75, 75, 75);
    font-family: 'Notable';
    font-size: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Title = styled.h1`
    font-family: 'lobster';
    font-size: 3em;
`

export const IntroSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const Icons = styled.div``
