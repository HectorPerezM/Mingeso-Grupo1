import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';

import MenuAppBar from './layout/MenuAppBar';
import HomePage from './components/HomePage';
import Exercises from './containers/Student/Exercises';
import HomeStudent from './components/Student/Home';

import './styles/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MenuAppBar />

        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/Estudiante" exact component={HomeStudent} />
          <Route path="/Estudiante/Ejercicios" component={Exercises} />
        </Switch>

      </div>
    );
  }
}

export default App;
