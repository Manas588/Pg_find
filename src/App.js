import React from 'react';
import './App.css';
import MainPage from './MainPage';
import NotFound from './NotFound';
import House from './House';
import Particles from 'react-particles-js';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";

const particlesOptions = {
  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        value_area: 500
      }
    }
  }
}

const App = () => {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Particles className='particles'
            params={particlesOptions}
          />
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route exact path='/:city/:id' component={House} />
        <Route exact path='/404' component = {NotFound} />
        <Redirect to='/404'/>

      </Switch>
    </Router>

  );
  

}

export default App;
