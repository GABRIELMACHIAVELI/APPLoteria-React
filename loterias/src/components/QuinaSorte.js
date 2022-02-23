import { useState } from 'react'
function SorteioQuina()
{

  const [quina, setQuina] = useState([])
  
  
   
  
  return (
    <div> 
      {quina ?  quina.join("-") : ""}
      <div className='d-flex justify-content-center'> 
        
      <button className='btn btn-success' onClick={() => {
         const resultado = [];
         for (let index = 0; index < 5; index++) {    
         let numero = Math.floor(Math.random() * 80) + 1;
         while (resultado.some(p => p===numero)) {
         numero = Math.floor(Math.random() * 80) + 1;
        }
  resultado[index] = numero;

  
} 
setQuina(resultado.sort(function(a, b) {
  return a - b;
}))
      }}> 
            Sortear
          </button>
      </div>
    </div>
  )   
     
}

export default function QuinaSorte() {
    
  return (
    <>
        <div className='col-md-12 d-flex justify-content-center'>
          <img className='foto' src='https://logodownload.org/wp-content/uploads/2018/10/quina-logo-6.png'/>
            
        </div>
        <div className='resultQUINA d-flex justify-content-center mx-auto'> 
          <div> {SorteioQuina()} </div>
        </div>
      </>     
  )
}
