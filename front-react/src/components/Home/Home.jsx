import React, { Component } from 'react';
import { Grid, Row, Col} from 'react-bootstrap';
import './Home.css';
import { StudentStats } from '../Student/Stats/StudentStats';

class Home extends Component{
    constructor(props){
        super(props);

        this.state = {
            userId: 1,
            typePerson: -1
        }
    }

    componentWillMount(){
        this.setState({typePerson: 0});
    }


    render(){
        if(this.state.typePerson === 0){ //alumno
            return(
                <div className="container">
                    <Row>
                        <Col xs={12}>
                            <h1 className="title">Bienvenido</h1>
                        </Col>
                    </Row>
                    <div className="body">
                    <div className="card">
                        <h3 className="card-title">Home</h3>
                          <div className="card-body">
                            <Row>
                                <Col xs={12}>
                                    <h4>En esta plataforma podrás ejercitar para Fundamentos de Programación y Computación, resolviendo ejercicios en C, Java y Python.</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <h1>Noticias</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h1>Calendario de peps</h1>
                                </Col>
                            </Row>
                          </div>
                        </div>
                    </div>
                </div>
            );
        } else if(this.state.typePerson === 1){ //profesor
            return(
                <div className="container">
                    <Row>
                        <Col xs={12}>
                            <h1 className="title">Bienvenido</h1>
                        </Col>
                    </Row>
                    <div className="body">
                    <div className="card">
                        <h3 className="card-title">Home</h3>
                          <div className="card-body">
                            <Row>
                                <Col xs={12}>
                                    <h4>En esta plataforma podrás ejercitar para Fundamentos de Programación y Computación, resolviendo ejercicios en C, Java y Python.</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <h1>Noticias</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h1>Calendario de peps</h1>
                                </Col>
                            </Row>
                          </div>
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div className="container">
                    <Row>
                        <Col xs={12}>
                            <h1 className="title">Bienvenido</h1>
                        </Col>
                    </Row>
                    <div className="body">
                    <div className="card">
                        <h3 className="card-title">Home</h3>
                          <div className="card-body">
                            <Row>
                                <Col xs={12}>
                                    <h4>En esta plataforma podrás ejercitar para Fundamentos de Programación y Computación, resolviendo ejercicios en C, Java y Python.</h4>
                                </Col>
                            </Row>

                            <Row>
                                <Col xs={12}>
                                    <h1>Noticias</h1>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12}>
                                    <h1>Calendario de peps</h1>
                                </Col>
                            </Row>
                          </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Home;
