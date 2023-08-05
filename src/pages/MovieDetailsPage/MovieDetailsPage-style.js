import { Link } from "react-router-dom";
import { styled } from "styled-components";


export const BoxLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    border-bottom: solid grey 2px;
    `


export const TitleLinks = styled.h3`
    font-size: 24px;
    color: #272727;
    `

export const ContainerLinks = styled.div`
    display: flex;
    gap: 25px;
`

export const Links = styled(Link)`
    text-decoration: none;
    color: #272727;
    font-size: 18px;
    /* margin-right: 25px; */
    &:hover{
        color: #CD0005;
        cursor: pointer;
    }
`





