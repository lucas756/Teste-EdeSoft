//Importar as dependências
import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

//Importar as páginas
import Dashboard from '../Pages/Dashboard/index';
import SignUp from '../Pages/SignUp/index'; 
import Relatorio from '../Pages/Relatorio/index'; 


//Criar o componentes com as rotas
function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Dashboard} />
                <Route path="/sign-up" component={SignUp} />
                <Route path="/relatorio" component={Relatorio} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;