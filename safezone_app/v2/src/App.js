import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Reports from './pages/Reports';
import Profile from './pages/Profile';
import About from './pages/About';
import Recomendation from './pages/Recomendation';
import mapa from './pages/map/Map';
import Mapa from './pages/map/Map';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/mapa' component={Mapa} />
          <Route path='/reports' component={Reports} />
          <Route path='/recomendations' component={Recomendation} />
          <Route path='/about' component={About} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
