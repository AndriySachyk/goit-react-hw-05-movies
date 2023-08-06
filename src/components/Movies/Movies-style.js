import { styled } from "styled-components";

export const BoxForm = styled.div`
    padding-top: 50px;
    padding-bottom: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    
    `
export const FormMovies = styled.form`
    display: flex;
    gap: 25px;
    height: 35px;
    width: 450px;


`

export const InputForm = styled.input`
    width: 100%;
    box-shadow: 0px 5px 15px black;
    border-radius: 8px;
    padding-left: 10px;
    outline: none;
    color: #272727;
    font-size: 16px;
    font-weight: 400;
    &:focus{
        border-color:  #CD0005;
        box-shadow: 0px 5px 15px #CD0005;
        
    }
    `
export const ButtonForm = styled.button`
    background-color: #FFFFFF;
    border-radius: 8px;
    &:hover{
        color: #CD0005;
        border-color:  #CD0005;
        box-shadow: 0px 5px 15px #CD0005;
    }

`
