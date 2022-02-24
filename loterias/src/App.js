import { React } from 'react';
import './App.css';
import QuinaSorte from './components/QuinaSorte';
import LotoFacilSorte from './components/LotoFacilSorte';
import MegaSorte from './components/MegaSorte';
import LotomaniaSorte from './components/LotomaniaSorte';
import DiaSorte from './components/DiaSorte';
import SuperSorte from './components/SuperSorte';
import Navegacao from './components/Navegacao';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
import PG_Resultados from './components/PG_Resultados';
import ResultadosLote from './services/Resultados/ResultadosLote';
import ComoJogar from './components/ComoJogar';
import ResultLotoFacil from './services/Resultados/ResultLotoFacil';
import ResultQuina from './services/Resultados/ResultQuina';
import ResultMega from './services/Resultados/ResultMega';
import ResultDiaSorte from './services/Resultados/ResultDiaSorte';
import ResultSuper from './services/Resultados/ResultSuper';



export default function App() {
  

  return (    
      <>
              <div>
              
                        </div>
              <Router>  
              <div className='nav'> 
              <Navegacao/>
              <Routes>
              <Route element={<PG_Resultados/>} path='/Resultados' />
              <Route element={<ResultLotoFacil/>}  path='/Resultados/Lotofacil'/>
              <Route element={<ResultQuina/>}  path='/Resultados/Quina'/>
              <Route element={<ResultMega/>}  path='/Resultados/MegaSena'/>
              <Route element={<ResultDiaSorte/>}  path='/Resultados/DiadeSorte'/>
              <Route element={<ResultSuper/>}  path='/Resultados/SuperSete'/>
              <Route element={<ComoJogar/>} path='/ComoJogar' />
              </Routes>
              
              </div>
              </Router>
              
             


              <div className='textMain container text-center '>
                
                <h2 className='text-uppercase titleMain shadow-lg '> Está sem palpite? </h2> <br/>
                <h2 className='text-uppercase titleMain shadow-lg'> Sorteie e aposte</h2> </div>
              <div className='principal container shadow-lg'> 
              
              
              <header className='text-center mt-3'> 

              </header>
              
              <div>
               
             </div>
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





