import styled from 'styled-components';
import { sizes } from '../../utils/mediaQueries'

export const Container = styled.div`
  height: 80px;
  width: 100%;
  background: rgb(113, 89, 193);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #FFF;
`;

export const Logo = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    width: 20%;
`

export const Navigation = styled.div`
    width: 80%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    min-height: 35px;
    height: 100%;
    color: #FFF;
    @media ${ sizes.mobile } {
      display: none;
    }
`

export const NavigationMobile = styled.div`
    width: 90%%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    min-height: 35px;
    height: 100%;
    color: #FFF;
`

