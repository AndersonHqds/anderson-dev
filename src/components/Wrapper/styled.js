import styled from 'styled-components';
import { sizes } from '../../utils/mediaQueries'

export const Container = styled.section`
  width: 90%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  @media ${ sizes.mobile } {
    width: 100%;
    flex-direction: ${ props => props.reverse ? "column-reverse" : "column" };
    height: 100%;
    align-items: center;
    justify-content: center;
  }
`;
