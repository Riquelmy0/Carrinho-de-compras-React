import React from "react"
import Home from "./page/home/home.js";
import { ThemeProvider } from "styled-components";


const theme = {
    background: "#faba10",
}


export default function App(){

    return(<>
        <ThemeProvider theme={theme}>
            <Home/>
        </ThemeProvider>
    </>)
} 