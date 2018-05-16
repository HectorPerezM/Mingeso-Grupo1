import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
// Container components
import Form from './containers/Form.js';
import ProblemsStudent from './containers/ProblemsStudent.js'
import FormStudent from './containers/FormStudent.js'
import dynamicInput from './containers/dynamicInput.js'
// Assets
import logo from './images/logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                    <h1>NOVUS CREARE</h1>
                    <img src={logo} className="App-logo" alt="logo"/>
                    <nav className="main-nav">
                        <ul>
                            <li><NavLink activeClassName="selected" to="/problems">Lista de Problemas</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/add">Añadir Problema 1</NavLink></li>
                            <li><NavLink activeClassName="selected" to="/dynamic">Añadir Problema 2</NavLink></li>
                        </ul>
                    </nav>
                </div>

                <div className="container">
                    <Route path="/problems/" component={ProblemsStudent}/>
                    <Route path="/add" component={Form}/>
                    <Route path="/dynamic" component={dynamicInput}/>
                    <Route path="/edit/:id" component={FormStudent}/>
                </div>
            </div>
        </Router>
    );
};

export default App;
