import styled from "styled-components";



export const DivCart = styled.div`
    width: 100%;
    height: 100vh;
    max-width: 450px;
    background-color: white;
    position: fixed;
    top:0;
    right: 0;
    box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    transition: all 2s;
`
export const CartChildren = styled.div`
    flex-grow: 1;
    margin-top:100px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap:10px;



`
export const CartResume = styled.div`
   font-size: 1.8rem;
   font-weight: 500;
   padding: 35px 10px 50px;
   border-top: 1px solid #ddd;
   display: flex;
   gap:15px;
   flex-direction: column;

`

export const FinalizarCompra = styled.button`
    width: 10rem;
    height: 2rem;
    background-color: #fff159;
    border: none;
    cursor: pointer;
    font-weight: 400;
    transition: .4s;
    box-shadow: 0 1px 10px rgba(0,0,0,0.1);



    &:hover{
        transform: scale(1.02);
        background-color: rgba(255, 227, 0, 1);
    }
`

export const Preenchimento = styled.div``




