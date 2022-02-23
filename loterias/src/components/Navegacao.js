import React from 'react'
import ResultadosLote from '../services/Resultados/ResultadosLote'


export default function Navegacao() {
  return (
      <>
              <nav className="navbar navbar-expand-lg navbar-light container rounded mt-2 mb-4 shadow-lg ">
          <a className="navbar-brand bg-white p-2 rounded text-uppercase" href="#">Sorteio na cabeça</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              
              <li className="nav-item">
                <a className="nav-link" href="#">Resultados</a>
              </li>
             
              <li className="nav-item">
                <a className="nav-link" href="#">Como jogar</a>
              </li>
            </ul>
            
          </div>
        </nav>
     
      </>
    

  )
}
