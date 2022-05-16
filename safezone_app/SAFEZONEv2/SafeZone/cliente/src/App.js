//paginas
import Home from './paginas/Home';
import Inicio from './paginas/Inicio';
import Registro from './paginas/Registro';
import Dashboard from './paginas/Dashboard';
import Perfil from './paginas/Perfil';
import Recomendados from './paginas/Recomendados';

//Styled components
import {StyledContainer} from './componentes/styles';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <StyledContainer>
        <Switch>
        <Route path='/Recomendados'>
          <Recomendados />
          </Route>
        <Route path='/Perfil'>
            <Perfil />
          </Route>
          <Route path='/Registro'>
            <Registro />
          </Route>
          <Route path='/Dashboard'>
          <Dashboard />
          </Route>
          <Route path='/Inicio'>
            <Inicio />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </StyledContainer>
    </Router>
  );
}

export default App;
