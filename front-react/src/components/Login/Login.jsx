import React, {Component} from 'react';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Col, Row} from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import udes from '../../assets/img/udes.png';
import './Login.css';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            password: '',
            typePerson: -1, //0 alumno, 1 profe, 2 coordinador
            redirect: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.validateForm = this.validateForm.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange = (event) => {
        this.setState({ [event.target.name] : event.target.value });
        console.log("Email: "+ this.state.email + " | Password: " + this.state.password);
    }

    validateForm = () => {
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    login = () => {
        //si la respuesta es correcta del llamado a la api

        //logica para ver asignar que tipo de persona es
        // this.setState({typePerson: 0});

        sessionStorage.setItem('userEmail', this.state.email);
        sessionStorage.setItem('userType', 0);

        // sessionStorage.setItem('userData', {
        //     email: this.state.email,
        //     typePerson: this.state.typePerson
        // });

        this.setState({ redirect: true });
        
        // if(this.state.email === "example@usach.cl" && this.state.password === "1234"){
        //     this.setState({ redirect: true, typePerson: 0 });
        // } else {
        //     this.setState({ redirect: true, typePerson: -1 });
        // }
    }

    render(){

        if(sessionStorage.getItem('userEmail') !== null){
            return <Redirect to={"/home"} />
        }

        if(this.state.redirect){
            console.log("typePerson: " + this.state.typePerson);
            return <Redirect to={"/home"} />
        }

        return(
            <div className="login">
                <Grid fluid>
                    <Row>
                        <Col xs={6} md={4} mdPush={4} className="login-form">
                            <Col xs={6} xsOffset={3}>
                                <div className="div-logo-udes">
                                    <img src={udes} alt="logo_image" className="logo-udes"/>
                                </div>
                            </Col>
                        <Col xs={12}>
                            <h1>Plataforma para Fundamentos de Computación y Programación</h1>
                        </Col>
                            <Col xs={8} xsOffset={2}>
                                
                                    <FormGroup controlId="email" bsSize="large">
                                        <ControlLabel bsClass="login-label">Correo</ControlLabel>
                                        <FormControl
                                            autoFocus
                                            placeholder="example@usach.cl"
                                            type="email"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.handleChange}
                                            bsSize="sm"
                                        />
                                    </FormGroup>
                                    <FormGroup controlId="password" bsSize="large">
                                        <ControlLabel bsClass="login-label">Contraseña</ControlLabel>
                                        <FormControl
                                        value={this.state.password}
                                        onChange={this.handleChange}
                                        placeholder="********"
                                        type="password"
                                        name="password"
                                    />
                                    </FormGroup>
                                    <Col xs={6} xsOffset={3}>
                                        <Button
                                            block
                                            bsSize="large"
                                            type="submit"
                                            disabled={!this.validateForm()}
                                            onClick={this.login}
                                            >
                                            Ingresar
                                        </Button>
                                    </Col>
                                
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Login;