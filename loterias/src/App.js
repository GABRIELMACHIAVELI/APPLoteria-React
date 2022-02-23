import { React } from 'react';
import './App.css';
import QuinaSorte from './components/QuinaSorte';
import LotoFacilSorte from './components/LotoFacilSorte';
import MegaSorte from './components/MegaSorte';
import LotomaniaSorte from './components/LotomaniaSorte';
import DiaSorte from './components/DiaSorte';
import SuperSorte from './components/SuperSorte';
import Navegacao from './components/Navegacao';



export default function App() {
  

  return ( 
    
      <> 
      
            

      <div className='nav'> 
      <Navegacao/>

      </div>
      <div className='textMain container text-center '>
        
         <h2 className='text-uppercase titleMain shadow-lg '> Está sem palpite? </h2> <br/>
        <h2 className='text-uppercase titleMain shadow-lg'> Sorteie e aposte</h2> </div>
      <div className='principal container shadow-lg'> 
      
      
      <header className='text-center mt-3'> 

      
          
         
                   

      </header>
          <div className='row mt-3'>
            <QuinaSorte/>
            <LotoFacilSorte/>
            <MegaSorte/>
            <LotomaniaSorte/>
            <DiaSorte/>
            <SuperSorte/>            
            
          
              </div>  
          </div>

      </>

  )



}




;
