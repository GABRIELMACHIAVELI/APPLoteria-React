import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';


const API_KEY = 'KRhL2XgMnrCe9bW'; 
const API_BASE = 
           axios.create({ baseURL: 'https://apiloterias.com.br/app/',})
export default function () {

    const [resultadoQuina, setResultadoQuina] = useState([])
    useEffect(() => {
        API_BASE
          .get("resultado?loteria=quina&token=KRhL2XgMnrCe9bW&concurso=[NUMERO_DO_CONCURSO]")
          .then((response) => setResultadoQuina(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
  return (
    <div>
           <div className='main row mb-5 container'>
            <div className='text-center mt-5 row'>
                <h2 className='mb-3 megaResult display-3'> {resultadoQuina?.nome}</h2>
                <div className='col-md-4'> 
                <p> <strong>Concurso: </strong>  {resultadoQuina?.numero_concurso}</p>
                </div>
               <div className='col-md-4'>
                  <p> <strong>Data: </strong> {resultadoQuina?.data_concurso}</p>
                </div>
                <div className='col-md-4'> 
                <p> <strong>Próximo concurso: </strong>{resultadoQuina?.data_proximo_concurso}</p> </div>
               <div className='d-flex justify-content-center'>
               <div className='col-md-4'> 
               <h2 className='text-center display-4'> Dezenas</h2>
               <h2 className='dezenasMEGA'>  {resultadoQuina?.dezenas?.join("-")}</h2>
               </div>
                 </div> 
                
                
               
                     <section> 
                     <div>{resultadoQuina?.premiacao?.map((num, nome) => 
                        (<div key={nome}>
                              <div className='display-5'> {num?.nome} </div> <br/>
                              <div> Número de ganhadores {num?.quantidade_ganhadores} </div><br/>
                              <div>Valor: {num?.valor_total}</div><br/>
                              <div>Acertos: {num?.acertos}</div>
                        </div>))}
                      </div>
                     </section>
                     
                     
                                    
                
                </div>


              
            </div>
    </div>
  )
}
