import styled from 'styled-components';
import 'typeface-notable'
import 'typeface-lobster'
import 'typeface-roboto'

export const Container = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const LottieContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 50%;
    height: ${ props => props.height ? props.height :  window.screen.height - 190 }px
`;

export const AndersonContainer = styled.div`
    width: 50%;
    color: rgb(75, 75, 75);
    font-family: 'lobster';
    font-size: 2em;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
`

export const Title = styled.h1`
    font-family: 'lobster';
    font-size: 3em;
`

export const Section = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    width: 100%;
`

export const Icons = styled.div``

export const AboutMeContainer = styled.div`
    display: flex;
    width: 50%;
    flex-direction: column;
    align-items: center;
    font-family: 'roboto';
    color: #FFF;
`

export const HalfContainer = styled.div`
    width: ${ props => props.width ? props.width : "50%" };
    display: flex;
    flex-direction: ${ props => props.direction ? props.direction : 'row' }
    justify-content: ${ props => props.justify ? props.justify : props.direction === "row" ? "center" : "flex-start" };
    align-items: center;
`

export const DisplayFlex = styled.div

export const ProgressBar = styled.div`
    width: ${ props => props.width ? props.width : "150px" }
    height: ${ props => props.height ? props.height : "150px" }
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    height: auto;
    flex-wrap: wrap;
`
