import { useState }from 'react'

function SorteioLotofacil() { 
    const [lotofacil, setLotofacil] = useState([]);
    const funResult=() => {
      const resultadoLoto = []; 
      for (let index = 0; index < 15; index++) {
        let numero = Math.floor(Math.random() * 25) + 1;
        while (resultadoLoto.some(p => p===numero)) {
          numero = Math.floor(Math.random() * 25) + 1;
        }
        resultadoLoto[index] = numero;
      }
    
    setLotofacil(resultadoLoto.sort(function(a, b) {
      return a - b;
    }));
    }    
    return (
      <div> 
        {lotofacil ? lotofacil.join("-"):""}
        <div className='d-flex justify-content-center'>
        <button className='btn btn-success' onClick={funResult}> Sortear</button>
        </div>
      </div>
    )

}
 
export default function LotoFacilSorte() {
  return (
      <>  <div className='col-md-12 d-flex justify-content-center'>
        
         <img className='foto' src='https://logodownload.org/wp-content/uploads/2018/10/lotofacil-logo-6.png'/>
                
              </div>

              <div className='resultLotoFacil d-flex justify-content-center mx-auto'> 
                   {SorteioLotofacil()}
                </div>
              </>      
  )
}
