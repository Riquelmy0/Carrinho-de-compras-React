import React, { useContext, useEffect, useState } from "react";
import * as S from "./styled.js";
import ButtonCar from "../CartButton/index.js";
import { BsSearch } from "react-icons/bs"
import fecthProducts from "../../api/Api.js";
import { StateGlobal } from "../../context/index.js";



function Header() {

    const { setValorProduct, setLoagin } = useContext(StateGlobal)



    let [valorInput, setValorInput] = useState('');


    const rasterProducts = async (event) => {
        event.preventDefault();
        setLoagin(true)// essa função é sobre a tela de loading, sobre a resposta do meu back-end

        const products = await fecthProducts(valorInput);
        setValorProduct(products);
        setValorInput('');
        setLoagin(false);
        

    }


    return (<>
        <S.StyledHeader onSubmit={rasterProducts}>
            <S.SpaceHeader>
                <S.Form>
                    <S.Input
                        type="search"
                        value={valorInput}
                        placeholder="buscar produtos"
                        onChange={({ target }) => setValorInput(target.value)}
                        required
                    >
                    </S.Input>
                    <S.Button>
                        <BsSearch />
                    </S.Button>
                </S.Form>

                <ButtonCar />

            </S.SpaceHeader>
        </S.StyledHeader>

    </>);
}

export default Header;



// aqui dentro desse arquivo é onde temos o nosso formulário de envio que faz com que possamos enviar 
