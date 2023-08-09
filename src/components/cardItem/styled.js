import styled from 'styled-components';

import theme from 'styled-components';

  




export const Card = styled.div`
    width: 18rem;
    max-width: 17rem;
    min-width: 15rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    box-shadow: 0 1px 1px #fefefe;
    position: relative;
    transition: .2s;
    background-color: white;

    &:hover{
        box-shadow: 0 1px 10px rgba(0,0,0, 0.1);

    }
   

`
export const CardContainner = styled.div`
    height: 100%;
`


export const Img = styled.img`
    src: ${(props) => props.scr};
    width: 100%;
    height: auto;
`


export const DivInfomation = styled.div`
    width: 100%;
    height: auto;
    padding-left: 10px;
    background-color: white;
    box-sizing: border-box;
    margin-top: 1px;
    padding-top: 8px;
`


export const TituleProduct = styled.h2`
    font-family: 'Roboto';
    font-size: 15px;
    font-weight: 600;
    margin: 20px auto;
    line-height: 1.5;
    width:100%;
    height:auto;
    text-overflow: inherit;
    width:100%;
    height: 3rem;
    opacity: 0.7;
    overflow: hidden;
`
export const TitlePrice = styled.h2`
    font-family: 'Roboto';
    font-weight: 600;
    width: 100%;
    font-size: 30px;
    font-weight: 400;
`


export const ButtonCart = styled.button`
    position: absolute;
    top: 10px;
    right: 5px;
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
    border:none;
    color: #1aa3ff;
    cursor: pointer;
    display: grid;
    place-items: center;
    transition: .4s ease;

    &:hover{
        transform: scale(1.05) ;
    }

   
`
export const SpaceButtons = styled.div`
    width: 100%;
    height: 3rem;
    display: flex;
    flex-direction: column;
    gap:10px;
    padding: 10px;
    box-sizing: border-box;
`


export const Button = styled.button`
    width: 100%;
    height: 2rem;
    cursor: pointer;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap:1rem;
    margin-top: 2px;
    background-color: #fff159;
    font-weight: 600;
    font-size: 18px;
    box-sizing: border-box;
`

