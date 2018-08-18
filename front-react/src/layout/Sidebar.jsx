import React, { Component } from 'react';
import {NavLink, Redirect} from 'react-router-dom';

import udes from '../assets/img/udes.png';
import fing from '../assets/img/fing.png';
import './Sidebar.css';

class Sidebar extends Component {
    constructor(props){
        super(props);

        this.state = {
            userType: -1,
            redirect: false
        }
    }

    componentWillMount(){
        let userType = sessionStorage.getItem('userType');

        if(userType !== null){
            this.setState({userType: parseInt(userType, 10)})
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

        if(this.state.userType === 0){ //sidebar para el alumno
            return(
                <div id="sidebar" className="sidebar">
                    <div className="div-logo-udes">
                        <img src={udes} alt="logo_image" className="logo-udes"/>
                    </div>
                    
                    <nav className="side-nav">
                        <ul>
                            <li>
                                <NavLink to="/home">
                                    <span><i class="fas fa-home"></i></span>
                                    <span className="icon-name">Inicio</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/exercises">
                                    <span><i className="fas fa-columns"> </i></span>
                                    <span className="icon-name">Ejercicios</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/exercises">
                                    <span><i class="fas fa-user"></i></span>
                                    <span className="icon-name">Perfil</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                    <input type="submit" name="logout" value="Salir" onClick={this.logout} className="logout" />
                    <img src={fing} alt="logo_image" className="logo-fing"/>
                </div>
            );
        } else if(this.state.userType === 1) { //sidebar para el profe
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
                                    <span className="icon-name">Inicio</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/problem">
                                    <span><i className="fas fa-columns"> </i></span>
                                    <span className="icon-name">Ejercicios</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/problems/teacher">
                                    <span><i className="fas fa-columns"> </i></span>
                                    <span className="icon-name">Secciones</span>
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                    
                    <input type="submit" name="logout" value="Salir" onClick={this.logout} className="logout" />
                    <img src={fing} alt="logo_image" className="logo-fing"/>
                </div>
            );
        } else { //coordinador
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
                                    <span className="icon-name">Inicio</span>
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/problem">
                                    <span><i className="fas fa-columns"> </i></span>
                                    <span className="icon-name">Inscribir</span>
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
}

export default Sidebar;