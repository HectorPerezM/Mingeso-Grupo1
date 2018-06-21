import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import ProblemsStudent from './containers/ProblemsStudent.js'
import FormStudent from './containers/FormStudent.js'
import FormProblem from './containers/FormProblem.js'
import Menu from './containers/Menu.js'
// Assets
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <h1>...</h1>
                </div>
                <div id="sidebar" className="sidebar">
                <nav className="side-nav">
                    <ul>
                        <li>
                        <span></span>
                        <NavLink to="/problems">Lista de Problemas</NavLink>
                        </li>
                        <li>
                        <NavLink to="/add">Añadir Problema </NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className="container">
                    <Route path="/home" component={Menu}/>
                    <Route path="/problems/" component={ProblemsStudent}/>
                    <Route path="/add" component={FormProblem}/>
                    <Route path="/edit/:id" component={FormStudent}/>
                </div>
            </div>
        </Router>
    );
};

export default App;
