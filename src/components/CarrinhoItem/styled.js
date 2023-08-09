import styled from "styled-components";



export const ItemCarrinho = styled.div`
    width: 21rem;
    height: 5rem;
    display: flex;
    padding: 10px;
    color: black;
    gap: 10px;
    border-bottom: solid 1px rgba(0,0,0,0.1);

    &:last-child{
        border-bottom: none;
    }
`

export const PositionDescription = styled.div`
    font-size: 17px;
    opacity: 0.7;
    overflow:hidden;
    white-space: nowrap; /* Impede a quebra de linha do texto */
    overflow: hidden; /* Oculta qualquer conteúdo que ultrapasse a largura */
    text-overflow: ellipsis;

`

export const Imagem = styled.img`
    src: ${(props)=> props.scr};
    width: auto;
    height: auto;

`
export const price = styled.div`
     font-size: 27px;
     font-weight: 700;

`
export const posits = styled.div`
    width: 60%;
    display: flex;
    flex-direction: column;
    gap:5px;
    position: relative;

    &:last-child{
        border-bottom: none;
    }

`
export const Button = styled.button`
    width: 2rem;
    height: 2rem;
    font-size: 20px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: grid;
    place-items: center;
    border: none;
    border-radius: 50%;
    background-color: transparent;
    cursor:pointer;
    transition: 0.3s;

    &:hover{
      transform: scale(1.04);
    }

`
