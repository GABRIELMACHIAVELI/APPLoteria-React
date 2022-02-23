import { useState } from 'react'



function SorteiaMega() {
    const [mega, setMega] = useState([])
    return (
      <div> 
        {mega ?  mega.join("-") : ""}
        <div className='d-flex justify-content-center'> 
          
        <button className='btn btn-success' onClick={() => {
            const resultmega = [];
            for (let index = 0; index < 6; index++) {
              let numero = Math.floor(Math.random() * 60) + 1;
              while (resultmega.some(p => p===numero)) {
                numero = Math.floor(Math.random() * 60) + 1;
              }
              resultmega[index] = numero;
  
    
  } 
  setMega(resultmega.sort(function(a, b) {
    return a - b;
  }))
        }}> 
              Sortear
            </button>
        </div>
      </div>
    )   
    
  
  }
  

export default function MegaSorte() {
  return (
    <>
    <div className='col-md-12 d-flex justify-content-center'>
         <img className='foto' src='https://logodownload.org/wp-content/uploads/2018/10/mega-sena-logo-6.png'/>
    
   </div>
   <div className='resultMEGA d-flex justify-content-center mx-auto'> 
      {SorteiaMega()}
    </div>
   </>
  )
}
