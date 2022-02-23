//token: KRhL2XgMnrCe9bW

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const API_KEY = 'KRhL2XgMnrCe9bW'; 
const API_BASE = 
           axios.create({ baseURL: 'https://apiloterias.com.br/app/',})


export default function ResultadosLote() {
   const [resultadoMega, setResultadoMega] = useState([])
    useEffect(() => {
        API_BASE
          .get("resultado?loteria=megasena&token=KRhL2XgMnrCe9bW&concurso=[NUMERO_DO_CONCURSO]")
          .then((response) => setResultadoMega(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);
      
      

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
       <> <div className=' container main row d-flex justify-content-center'>
            <div>
                <p>Resultado: {resultadoMega?.nome}</p>
                <p>Concurso: {resultadoMega?.numero_concurso}</p>
                <p> Data:{resultadoMega?.data_concurso} </p>
                <p> Dezenas: {resultadoMega?.dezenas}</p>
                
               
                     <section> 
                     <div>{resultadoMega?.premiacao?.map((num, nome) => 
                        (<div key={nome}>
                              <div> {num?.nome} </div> <br/>
                              <div> Número de ganhadores {num?.quantidade_ganhadores} </div><br/>
                              <div>Valor: {num?.valor_total}</div><br/>
                              <div>Acertos: {num?.acertos}</div>
                        </div>))}
                      </div>
                     </section>
                     <p> Próximo concurso: {resultadoMega?.data_proximo_concurso}</p>
                     
                      <section>
                     
                      </section>
                      
                
                </div>


              
            </div>
                    <hr/>
            <div>
                
                <p>Resultado: {resultadoQuina?.nome}</p>
                <p>Concurso: {resultadoQuina?.numero_concurso}</p>
                <p>Dezenas: {resultadoQuina?.dezenas}</p>
                <p>Arrecadação: {resultadoQuina?.arrecadacao_total}</p>
                <p>Premiação: {resultadoQuina?.premiacao?.quantidade_ganhadores}</p>
                <section> 
                     <div>{resultadoQuina?.premiacao?.map((num, nome) => 
                        (<div key={nome}>
                              <div> {num?.nome} </div> <br/>
                              <div> Número de ganhadores {num?.quantidade_ganhadores} </div><br/>
                              <div>Valor: {num?.valor_total}</div><br/>
                              <div>Acertos: {num?.acertos}</div>
                        </div>))}
                      </div>
                     </section>

            </div>
          
        </>
     )
  
}
