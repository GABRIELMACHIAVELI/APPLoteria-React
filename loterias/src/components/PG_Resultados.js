import React from 'react'
import ResultadosLote from '../services/Resultados/ResultadosLote';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

import '../components/PG_Resultados.css';
import ResultLotoFacil from './../services/Resultados/ResultLotoFacil';

export default function PG_Resultados() {
  return (


    <div className='pgResultados container'>
      <h2 className='mb-5 text-resultados d-flex justify-content-center mt-3 text-uppercase'>Últimos resultados</h2>
     
      <nav className="nav d-flex justify-content-center navResult">
        <a className="nav-link active btn btn-success me-2" href="/Resultados/MegaSena">Mega-Sena</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Quina">Quina</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Lotofacil">Lotofácil</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Lotomania">Lotomania</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/DiadeSorte">Dia de Sorte</a>
        <a className="nav-link active btn btn-success" href="/Resultados/SuperSete">Super Sete</a>
       
        
         
             
      
      </nav>


          
        <ResultadosLote/>

    </div>
  )
}
