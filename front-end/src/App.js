import React from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import ProblemsStudent from './containers/ProblemsStudent.js'
import ProblemsTeacher from './containers/ProblemsTeacher.js'
import FormStudent from './containers/FormStudent.js'
import FormProblem from './containers/FormProblem.js'
import EditProblem from './containers/EditProblem.js'
import Header from "./components/Header/Header.jsx";

// Assets
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/App.css';

const App = () => {
    return (
        <Router>
            <div className="App">
                <div className="App-header">
                  <Header {...this.props} />
                </div>
                <div id="sidebar" className="sidebar">
                <nav className="side-nav">
                    <ul>
                        <li>
                        <span></span>
                        <NavLink to="/problems/student">Lista de Problemas Estudiante</NavLink>
                        </li>
                        <li>
                        <NavLink to="/add">Añadir Problema </NavLink>
                        </li>
                        <li>
                        <NavLink to="/problems/teacher">Lista de Problemas Profesor </NavLink>
                        </li>
                    </ul>
                </nav>
                </div>
                <div className="container">
                    <Route path="/problems/student" component={ProblemsStudent}/>
                    <Route path="/problems/teacher" component={ProblemsTeacher}/>
                    <Route path="/add" component={FormProblem}/>
                    <Route path="/solve/:id" component={FormStudent}/>
                    <Route path="/edit/:id" component={EditProblem}/>

                </div>
            </div>
        </Router>
    );
};

export default App;
