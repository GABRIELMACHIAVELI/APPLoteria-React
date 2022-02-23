import { useState } from 'react'
import diasdesorte from '../img/diasdesorte.png'
import diadesorte_logo from '../img/diadesorte_logo.png'


function SorteioMes() { 
    const [mes, setMes] = useState("")
    const funMes=()=>{
        const resultMes = Math.floor(Math.random() * 12) + 1; 
        
     
        
        switch (resultMes) {
            case 1:
                
                setMes("Janeiro");
                break;
            case 2: 
            setMes("Fevereiro");
            break;
            case 3: 
            setMes("Março");
            break;
            case 4: 
            setMes("Abril");
            break;    
            case 5: 
            setMes("Maio");
            break;    
            case 6: 
            setMes("Junho");
            break;    
            case 7: 
            setMes("Julho");
            break;    
            case 8: 
            setMes("Agosto");
            break;    
            case 9: 
            setMes("Setembro");
            break;    
            case 10: 
            setMes("Outubro");
            break;    
            case 11: 
            setMes("Novembro");
            break;    
            case 12: 
            setMes("Dezembro");
            break;    
               
        
            default:
                setMes("Mês não definido");
                break;
               
        }
        
    }
   return (
       <>
        <div> {mes}
        <div className='d-flex justify-content-center'>
        <button className='btn btn-success' onClick={funMes}> Sortear mês</button>
        </div>
        </div>
       </>
   )

}


function SorteioDia() { 
    const [diadesorte, setDiadeSorte] = useState([]);
    const funDia=() => {
      const resultDia = []; 
      for (let index = 0; index < 7; index++) {
        let numero = Math.floor(Math.random() * 31) + 1;
        while (resultDia.some(p => p===numero)) {
          numero = Math.floor(Math.random() * 31) + 1;
        }
        resultDia[index] = numero;
      }
    
    setDiadeSorte(resultDia.sort(function(a, b) {
      return a - b;
    }));
    }    
    return (
      <div> 
        {diadesorte ? diadesorte.join("-"):""}
        <div className='d-flex justify-content-center'>
        <button className='btn btn-success' onClick={funDia}> Sortear</button>
        </div>
      </div>
    )

}

export default function DiaSorte() {
  return (
    <>
    
    <div className='col-md 12 d-flex justify-content-center'>
         <img className='foto fotoSuper' src= {diadesorte_logo}/>
      
   
    </div>
    <div className='resultLotoFacil d-flex justify-content-center text-center mx-auto'> 
       {SorteioDia()}
    </div>
    
    <div className='resultLotoFacil d-flex justify-content-center text-center mx-auto'> 
       {SorteioMes()}
    </div>
    
  
  </>
  )
}
