import React, { useContext, useEffect, useState } from 'react';
import * as S from './styled.js';
import ItemCarrinho from '../CarrinhoItem/index.js';
import { StateGlobal } from '../../context/index.js';
import formatCurrency from '../../utils/index.js';

function CartAdd() {
  const { cartItens, cartVisible } = useContext(StateGlobal);
  const [soma, setSoma] = useState(0);

  useEffect(() => {
    const valores = cartItens.map((item) => item.price);
    const totalSoma = valores.reduce((acc, valor) => acc + valor, 0);
    setSoma(totalSoma);
  }, [cartItens]);

  const formattedSoma = formatCurrency(soma, 'BRL');
  const showFinalizarCompra = cartItens.length > 0;

  return (
    <>
      {cartVisible && (
        <S.DivCart>
          <S.CartChildren>
            {cartItens.map((resultes) => (
              <ItemCarrinho key={resultes.id} data={resultes} />
            ))}
          </S.CartChildren>

          <S.CartResume>
            Valor dos itens {formattedSoma}
            <S.Preenchimento>
              {showFinalizarCompra && <S.FinalizarCompra>Finalizar Compra</S.FinalizarCompra>}
            </S.Preenchimento>
          </S.CartResume>
        </S.DivCart>
      )}
    </>
  );
}

export default CartAdd;
