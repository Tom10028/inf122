"use client"
import React from "react";
//import '../styles/Historial.css';
import style from './historial.module.css';
function Historial({historial, saltarA}){
    const movimientos=historial.map((paso,movimiento)=>{
        const descripcion=movimiento ?
            `Ir al movimiento #${movimiento}` :
            `Ir al inicio del juego `;
        return(
            <li key={movimiento}>
                <button onClick={()=> saltarA(movimiento)}>{descripcion}</button>
            </li>
        );
    });
    
    return(
        <div className={style["informacion-juego"]}>
            <ol>{movimientos}</ol>
        </div>

    );
}
export default Historial;