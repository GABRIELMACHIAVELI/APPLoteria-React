import { useState } from 'react'



function SorteioLotomania() 
{ 
  const [lotomania, setLotoania] = useState([])
  const resultLotomania=() => { 
      const result=[];
      for (let index = 0; index < 50; index++) {
        let numero = Math.floor(Math.random() * 100) + 1;
        while (result.some(p => p===numero)) {
          numero = Math.floor(Math.random() * 100) + 1;
        }
        result[index] = numero;
        
      }
      setLotoania(result.sort(function(a, b) {
        return a - b;
      }));
      

  }
  return (
    <div> 
      {lotomania ? lotomania.join("-"):""}
      <div className='d-flex justify-content-center'>
      <button className='btn btn-success' onClick={resultLotomania}> Sortear</button>
      </div>
    </div>
  )

}


export default function LotomaniaSorte() {
  return (
    <>
    <div className='col-md-12 d-flex justify-content-center'>
         <img className='foto' src='https://logodownload.org/wp-content/uploads/2018/10/lotomania-logo-6.png'/>
    
  </div>
  <div className='resultLotoFacil d-flex justify-content-center text-center mx-auto'> 
       {SorteioLotomania()}
    </div>
  </>
  )
}
