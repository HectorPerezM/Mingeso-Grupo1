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
                <Grid bsClass="home">
                    <Row>
                        <Col xs={12}>
                            <div className="home-title">
                                <h1>Bienvenido</h1>
                            </div>
                        </Col>
                    </Row>

                    <Row>
                        <Col xs={12}>
                            <div className="home-subtitle">
                                <h4>En esta plataforma podrás ejercitar para Fundamentos de Programación y Computación, resolviendo ejercicios en C, Java y Python.</h4>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            );
        } else if(this.state.typePerson === 1){ //profesor
            return(
                <div className="home">
                    <h1>home page profe</h1>
                </div>
            );
        } else {
            return(
                <div className="home">
                    <h1>home page coordinador</h1>
                </div>
            );
        }
    }
}

export default Home;