import { styled } from "styled-components";


export const BoxDetails = styled.div`
    padding-top: 25px;
    padding-left: 25px;
    padding-right: 25px;
    padding-bottom: 10px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    /* align-items: center; */
    width: auto;
    height: auto;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px, rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;
    border-bottom: solid grey 2px;
    `

export const BoxDetailsPhotoText = styled.div` 
    display: flex;
    gap: 25px;
`


export const ImgDetails = styled.img`
    display: block;
    width: 400px;
    height: 600px;
    `

export const BoxDetailsText = styled.div` 
    display: flex;
    flex-direction: column;
    /* justify-content: space-between; */
    `
export const DetailsText = styled.p`
    font-size: 16px;
    ` 

export const ArrowBck = styled.span`
    display: block;
    transform: rotate(180deg);
    
    `

export const ButtonBck = styled.button`
    width: 170px;
    height:auto;
    padding: 10px 25px;
    display: flex;
    
    align-items: center;
    gap: 10px;
    background-color: rgba(0,0,0,0);
    border: none;
    outline: none;
    font-size: 21px;
    font-weight: 500;
    
    &:hover{
        color: #CD0005;
        cursor: pointer;
    }
`