import { createContext, useState } from "react"



export const StateGlobal = createContext();
    


export function ValueProducts ({children}) {
    const [valorProduct, setValorProduct] = useState([]);
    const [cartItens, setCartItens] = useState([]);
    const [loading, setLoagin] = useState(true);
    const [cartVisible, setcartVisible] = useState(false) // estado que faz a barra do carrinho aparecer

    




    const valores = {
        valorProduct,
        setValorProduct,
        loading,
        setLoagin,
        cartItens,
        setCartItens,
        cartVisible, 
        setcartVisible
    }

    return(<>
        <StateGlobal.Provider value={valores}>
            {children}
        </StateGlobal.Provider>

    </>)
}

