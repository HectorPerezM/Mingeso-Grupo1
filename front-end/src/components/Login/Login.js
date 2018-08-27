import React, {Component} from 'react';
import {Redirect} from 'react-router-dom';
import { Button, FormGroup, FormControl, ControlLabel, Grid, Col, Row} from "react-bootstrap";
import "./Login.css";
import udes from "../../images/udes.png";
import auth from '../Auth/authenticated.js';
import {AuthService} from '../../App';

class Login extends Component{
    constructor(props){
        super(props);
        this.state = {
            email: "",
            password: "",
            redirectToReferrer: false
        };
        this.login = this.login.bind(this);
    }

    validateForm(){
        return this.state.email.length > 0 && this.state.password.length > 0;
    }

    handleChange = event => {
        this.setState({
          [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
    }

    login = (e) => {
        // console.log("Email: "+this.state.email+" Pass: "+this.state.password)
        console.log("Antes: "+AuthService.isAuthenticated);
        if(this.state.email === "example@usach.cl" && this.state.password === "111"){
            AuthService.auth((() => 
                this.setState({ redirectToReferrer: true })
            ));
            console.log("entro aqui 2?");
            // <Redirect to={"/Home"} />
            
            // () => {
            //         this.setState({ redirectToReferrer: true })
            //         console.log(AuthService.isAuthenticated)
            //     }
            // );
            
        }
    }
    
    // handleClick(event){
    //     var apiBaseUrl = "http://localhost:4000/api/";
    //     var self = this;
    //     var payload={
    //     "email":this.state.username,
    //     "password":this.state.password
    //     }

    //     axios.post(apiBaseUrl+'login', payload)
    //          .then(function (response) {
        
    //     console.log(response);
        
    //     if(response.data.code == 200){
    //     console.log("Login successfull");
    //     var uploadScreen=[];
    //     uploadScreen.push(<UploadScreen appContext={self.props.appContext}/>)
    //     self.props.appContext.setState({loginPage:[],uploadScreen:uploadScreen})
    //     }
    //     else if(response.data.code == 204){
    //     console.log("Username password do not match");
    //     alert("username password do not match")
    //     }
    //     else{
    //     console.log("Username does not exists");
    //     alert("Username does not exist");
    //     }
    //     })
    //     .catch(function (error) {
    //     console.log(error);
    //     });
    // }

    render(){
        const { from } = this.props.location.state || { from: { pathname: "/Home" } };
        const { redirectToReferrer } = this.state;
        
        if(redirectToReferrer){
            return <Redirect to={from} />
        }

        return(
            <div className="login" >
                <Grid>
                    <Row>
                        <Col xs={6} xsOffset={3} className="login-form">
                            <Col xs={6} xsOffset={3}>
                                <div className="div-logo-udes">
                                    <img src={udes} alt="logo_image" className="logo-udes"/>
                                </div>
                            </Col>
                            <Col xs={12}>
                                <h1>Plataforma para Fundamentos de Computación y Programación</h1>
                            </Col>
                            <Col xs={8} xsOffset={2}>
                            <form onSubmit={this.handleSubmit}>
                                <FormGroup controlId="email" bsSize="large">
                                    <ControlLabel bsClass="login-label">Correo</ControlLabel>
                                    <FormControl
                                    autoFocus
                                    placeholder="example@usach.cl"
                                    type="email"
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
                                    />
                                </FormGroup>
                                <Col xs={6} xsOffset={3}>
                                    <Button
                                        block
                                        bsSize="large"
                                        disabled={!this.validateForm()}
                                        type="submit"
                                        onClick={(e) => this.login(e)}
                                        >
                                        Ingresar
                                    </Button>
                                </Col>
                            </form>
                            </Col>
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Login;