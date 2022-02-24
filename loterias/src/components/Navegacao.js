import React from 'react'
import PG_Resultados from './PG_Resultados';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";


export default function Navegacao() {
  return (
      <>
          <div>
           
              <nav className="navbar navbar-expand-lg navbar-light container rounded mt-2 mb-4 shadow-lg ">
          <a className="navbar-brand bg-sucess p-2 rounded text-uppercase text-white" href="/">Sorteio na cabeça</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <a className="nav-link text-white" href="/Resultados">Resultados</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link text-white" href="/ComoJogar">Como jogar</a>
              </li>
            </ul>
            
          </div>
        </nav>
      
        </div>
      </>
    

  )
}
