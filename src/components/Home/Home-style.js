import { Link } from "react-router-dom";
import { styled } from "styled-components";




export const ContainerFilms = styled.div`
    padding-top: 50px;
    padding-left: 50px;
    
`

export const ListFilms = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 10px;
    font-size: 18px;
    `

export const LinkFilms = styled(Link)`
    text-decoration: none;
    color: #272727;
    &:hover {
        color: #CD0005;
        cursor: pointer;
    }
`