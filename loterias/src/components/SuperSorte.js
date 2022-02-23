import { useState} from 'react'
import logoSuper from '../img/logoSuper.png'

function SorteioSuperSete() { 
    const [supersete, setSuper] = useState([])
    const funSete=() => { 
        const resultSete = [];
        for (let index = 0; index < 7; index++) {
            let numeroSete = Math.floor(Math.random() * 10) ;
        while (resultSete.some(p => p===numeroSete)) {
            numeroSete = Math.floor(Math.random() * 10)
        }
        resultSete[index] = numeroSete;    
    }
    setSuper(resultSete.sort(function(a, b) {
        return a - b;
      }))

        
    } 
    
        return(
            <div> 
            {supersete ? supersete.join(" - " ): "" }
            <div className='d-flex justify-content-center'>
            <button className='btn btn-success' onClick={funSete}> Sortear</button>
             </div>

            </div>

        )


}

export default function SuperSorte() {
  return (
    <>
    <div className='col-md-12 d-flex justify-content-center'>
         <img className='foto fotoSuper' src= {logoSuper}/>
      
   
    </div>
  <div className='resultLotoFacil d-flex justify-content-center text-center mx-auto'> 
    <div className='row col-8 d-flex justify-content-center mx-auto'> 
        <div className='col-1 border border-warning'> 1</div>
        <div className='col-1 border border-warning'>2</div>
        <div className='col-1 border border-warning'>3</div>
        <div className='col-1 border border-warning'>4</div>
        <div className='col-1 border border-warning'>5</div>
        <div className='col-1 border border-warning'>6</div>
        <div className='col-1 border border-warning'>7</div>
       {SorteioSuperSete()}
       </div>
    </div>
  </>

  )
}
