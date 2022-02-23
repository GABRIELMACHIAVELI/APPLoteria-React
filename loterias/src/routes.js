import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import ResultadosLote from "./services/Resultados/ResultadosLote";
import App from './App';

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" exact />
           <Route component = { ResultadosLote }  path="/Resultados" />
         
       </BrowserRouter>
   )
}

export default Routes;