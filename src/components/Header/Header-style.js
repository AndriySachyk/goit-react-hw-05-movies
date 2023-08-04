import { NavLink } from "react-router-dom";
import { styled } from "styled-components";


export const HeaderPage = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    padding-top: 15px ;
    padding-bottom: 15px;
    box-shadow: 0px 5px 15px black;
    background-color: #D2D2D2;
    `


export const StyledNav = styled.nav`
    display: flex;
    gap: 100px;
`


export const StyledLink = styled(NavLink)`
  color: #272727;
  font-size: 18px;
  text-decoration: none;


  &.active {
    color: #CD0005;
    border-bottom: solid #CD0005 1px;
  }
`;