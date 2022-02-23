//token: KRhL2XgMnrCe9bW

import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';


const API_KEY = 'KRhL2XgMnrCe9bW'; 
const API_BASE = 
           axios.create({ baseURL: 'https://apiloterias.com.br/app/',})


export default function ResultadosLote() {
   const [resultado, setResultado] = useState([])
    useEffect(() => {
        API_BASE
          .get("resultado?loteria=[quina]&token=[KRhL2XgMnrCe9bW]&concurso=[5007]")
          .then((response) => setResultado(response.data))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

     return (
        <div>
            <p>Resultado: {resultado?.nome}</p>
             <p>Concurso: {resultado?.numero_concurso}</p>
             {resultado?.data_concurso}



        </div>

     )
  
}
