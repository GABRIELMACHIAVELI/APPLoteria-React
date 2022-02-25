import React from 'react'

import axios from 'axios';
import { useState, useEffect } from 'react';
import "../Resultados/ResultadosLote.css";


const API_KEY = 'KRhL2XgMnrCe9bW'; 
const API_BASE = 
           axios.create({ baseURL: 'https://apiloterias.com.br/app/',})


export default function ResultLotoFacil() {

    const [resultadoLotomania, setLotomania] = useState([])
    useEffect(() => {
        API_BASE
          .get("resultado?loteria=lotomania&token=KRhL2XgMnrCe9bW&concurso=[NUMERO_DO_CONCURSO]")
          .then((response) => setLotomania(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
  return (


    <div className='pgResultados container'>
      <nav className="nav d-flex justify-content-center navResult">
        <a className="nav-link active btn btn-success me-2" href="/Resultados/MegaSena">Mega-Sena</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Quina">Quina</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Lotofacil">Lotofácil</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/Lotomania">Lotomania</a>
        <a className="nav-link active btn btn-success me-2" href="/Resultados/DiadeSorte">Dia de Sorte</a>
        <a className="nav-link active btn btn-success" href="/Resultados/SuperSete">Super Sete</a>
       
      </nav>
          <div className='container main row'>
            <div className='text-center mt-5 row'>
                <h2 className='mb-3 megaResult display-3'> {resultadoLotomania?.nome}</h2>
                <div className='col-md-4'> 
                <p> <strong>Concurso: </strong>  {resultadoLotomania?.numero_concurso}</p>
                </div>
               <div className='col-md-4'>
                  <p> <strong>Data: </strong> {resultadoLotomania?.data_concurso}</p>
                </div>
                <div className='col-md-4'> 
                <p> <strong>Próximo concurso: </strong>{resultadoLotomania?.data_proximo_concurso}</p> </div>
               <div className='d-flex justify-content-center'>
               <div className='col-md-4'> 
               <h2 className='text-center display-4'> Dezenas</h2>
               <h2 className='dezenasMEGA'>  {resultadoLotomania?.dezenas?.join("-")}</h2>
               </div>
                 </div> 
                
                
               
                     <section> 
                     <div>{resultadoLotomania?.premiacao?.map((num, nome) => 
                        (<div key={nome}>
                              <div className='display-5'> {num?.nome} </div> <br/>
                              <div> Número de ganhadores {num?.quantidade_ganhadores} </div><br/>
                              <div>Valor: {num?.valor_total}</div><br/>
                              <div>Acertos: {num?.acertos}</div>
                        </div>))}
                      </div>
                     </section>
                     
                     
                      <section>
                     
                      </section>
                      
                
                </div>


              
            </div>


    </div>
  )
}
