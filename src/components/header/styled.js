import styled from "styled-components";



export const StyledHeader = styled.div`
    width: 100%;
    height: 5rem;
    background-color: rgba(255, 241, 89, 1) ;
    position: fixed;
    z-index: 100;
    display: flex;

   
`
export const SpaceHeader = styled.div`
    width: 1200px;
    max-width: 1700px;
    min-width: 200px;
    justify-content: space-around;
    margin: 0 auto;
    height: 100%;
    display: flex;
    color: white;
    align-items: center;

    @media (max-width: 420px) {
        width: 100%;

    }
    

`

export const Form = styled.form`
    width: 30rem;
    height: 2.5rem;
    display: flex;
    align-items: center;
    overflow: hidden;
    margin: 0 10px;
    box-shadow: 0 1px 1px rgba(0,0,0,0.1);


    @media (max-width: 420px) {
        width: 15rem;
        display:flex;

    }
    @media (max-width: 610px) {
        width: auto;

    }
    
`

export const Input = styled.input`
    width: 30rem;
    min-width: 200px;
    height: 100%;
    border: none;
    outline: none;
    padding: 0 20px;
    font-size: 19px;

    @media (max-width: 610px) {
        width: 15rem;
        display:flex;

    }
`
export const Button = styled.button`
    width: 50px;
    height: 100%;
    font-size: 20px;
    border: none;
    cursor: pointer;
`



