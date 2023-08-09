import React, { useContext, useEffect, useState} from 'react';
import * as S from './styled.js';
import fecthProducts from '../../api/Api.js';
import CardItem from '../cardItem/index.js';
import Loagind from '../Loading/index.js';
import { StateGlobal } from '../../context/index.js';



function Section() {
   
    const {valorProduct, setValorProduct, loading, setLoagin} = useContext(StateGlobal)

    useEffect(()=>{
        fecthProducts('itens').then((response)=> {
                setValorProduct(response);
            setLoagin(false)

        });
        
    },[])

    return (<>
       
        {loading ? <Loagind/> : <S.Section>
            <S.PartProducts>
               
                {
                    valorProduct.map(result => <CardItem key={result.id} data={result}/> )
                }
            </S.PartProducts>
        </S.Section>}


        

        
    </>);
}


export default Section;