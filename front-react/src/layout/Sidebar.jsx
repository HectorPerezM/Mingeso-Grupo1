import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import udes from '../assets/img/udes.png';
import fing from '../assets/img/fing.png';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            redirect: false
        }
    }

    logout = () =>{
        sessionStorage.setItem('userEmail', '');
        sessionStorage.setItem('userType', '');
        sessionStorage.clear();
        
        this.setState({redirect: true});
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={"/login"} />
        }

        return(
            <div id="sidebar" className="sidebar">
                <div className="div-logo-udes">
                    <img src={udes} alt="logo_image" className="logo-udes"/>
                </div>
                
                <nav className="side-nav">
                    <ul>
                        <li>
                            <NavLink to="/home">
                                <span><i class="fa fa-pie-chart"> </i></span>
                                <span>Inicio</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/problem">
                                <span><i className="fas fa-columns"> </i></span>
                                <span> Problemas Es</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/problems/teacher">
                                <span><i className="fas fa-columns"> </i></span>
                                <span> Problemas Profesor</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/add">
                                <span><i className="far fa-calendar-plus"> </i></span>
                                <span> Añadir Problema</span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/solve/1">
                                <span><i className="fa fa-keyboard"> </i></span>
                                <span> Resolver Problemas</span>
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                
                <input type="submit" name="logout" value="Salir" onClick={this.logout} className="logout" />
                <img src={fing} alt="logo_image" className="logo-fing"/>
            </div>
        );
    }
}

export default Sidebar;