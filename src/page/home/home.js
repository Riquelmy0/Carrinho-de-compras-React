import React from 'react';
import Header from '../../components/header/index.js';
import Section from '../../components/products/index.js';
import {ValueProducts} from "../../context/index.js"
import CartAdd from '../../components/cart/index.js'



function Home() {


    return (<> 
    <ValueProducts>
        <Header/>
            <Section/>
                <CartAdd/>
    </ValueProducts>
       </>
    )
    }
export default Home;