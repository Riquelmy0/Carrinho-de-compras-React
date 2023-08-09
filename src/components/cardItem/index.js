import React, { useContext } from 'react';
import * as S from './styled.js';
import { FiShoppingCart } from "react-icons/fi"
import { StateGlobal } from '../../context/index.js';
import formatCurrence from '../../utils/index.js'


function CardItem({ data }) {
    const { price, title, thumbnail } = data;

    const { cartItens, setCartItens } = useContext(StateGlobal);

    const handleCard = () => setCartItens([...cartItens, data])

    return (<>
        <S.Card>
            <S.CardContainner>
                <S.ButtonCart
                    onClick={handleCard}
                >
                    <FiShoppingCart fontSize={'30px'} />
                </S.ButtonCart>
                <S.Img
                    src={thumbnail.replace(/\w\.jpg/gi, "W.jpg")}
                ></S.Img>
                <S.DivInfomation>
                    <S.TitlePrice>{formatCurrence(price,'BRL')}</S.TitlePrice>
                    <S.TituleProduct>{title}</S.TituleProduct>
                </S.DivInfomation>
                <S.SpaceButtons>
                    <S.Button >Comprar</S.Button>
                </S.SpaceButtons>
            </S.CardContainner>
        </S.Card>

    </>);
}

export default CardItem;