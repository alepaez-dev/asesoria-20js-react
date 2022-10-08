import React, { useState } from "react"
import "./App.css";
import Button from "./components/Button/";
import Card from "./components/Card/";
import Logo from "./components/Logo/";
import Navbar from "./components/Navbar/";
import Input from "./components/Input/";
import { Outlet } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function App() {
    // Hooks
    const isMobile = useMediaQuery({
        query: "(max-width: 720px)",
    });

    /**
     * useEffect
     * useContext(manejado de estados) -> Recoil
     * Hooks customizadas
     * Router-dom
     * Analisis de jerarquia de componentes
     */
    // Local states
    /**
     * Arreglo con 2 cosas
     * 0: valor -> el que guarda -> es escuchado por react -> si este valor cambia -> se renderiza -> readonly
     * 1: funcion -> setea/guarda el valor de la posicion 0 -> write
     */

    /**
     *
     * Hooks
     * Local states
     * Handlers
     */

    return (
        // Las cosas que se repitan en su app
        <>
            <Navbar isMobile={isMobile}/>
            {/* Renderizado del hijo */}
            <Outlet />

        </>
    );
}

export default App;
