import React, { useContext } from "react";
import * as S from "./styled.js";
import { BsFillCartXFill } from 'react-icons/bs';
import formatCurrency from "../../utils/index.js";
import { StateGlobal } from "../../context/index.js";

export default function ItemCarrinho({ data }) {
  const { id, title, thumbnail, price } = data;
  const { cartItens, setCartItens } = useContext(StateGlobal);

  const handleRemoveItem = () => {
    const itemIndex = cartItens.findIndex((item) => item.id === id);
    if (itemIndex !== -1) {
      const updatedItems = [...cartItens];
      updatedItems.splice(itemIndex, 1);
      setCartItens(updatedItems);
    }
  };

  return (
    <S.ItemCarrinho>
      <S.Imagem src={thumbnail}></S.Imagem>
      <S.posits>
        <S.PositionDescription>{title}</S.PositionDescription>
        <S.price>{formatCurrency(price, "BRL")}</S.price>
        <S.Button onClick={handleRemoveItem}>
          <BsFillCartXFill
            style={{
              fontSize: "25px",
              color: "rgba(239, 32, 63, 1)",
            }}
          />
        </S.Button>
      </S.posits>
    </S.ItemCarrinho>
  );
}
