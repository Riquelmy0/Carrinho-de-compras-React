import React, { useContext, useEffect } from 'react';
import { ButtonCarrinho, Div } from './styled';
import {BsCart3} from "react-icons/bs"
import { StateGlobal } from '../../context';


function ButtonCar() {
    const {cartItens, cartVisible, setcartVisible} = useContext(StateGlobal);

    return (<>

    <ButtonCarrinho onClick={ ()=> setcartVisible(!cartVisible)}>
                <BsCart3/>
                 {cartItens.length > 0 && <Div>{cartItens.length}</Div>}
            </ButtonCarrinho>    
    
    </>);
}

export default ButtonCar;