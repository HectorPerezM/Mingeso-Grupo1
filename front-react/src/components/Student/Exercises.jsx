import React, {Component} from 'react';
import NavLink from 'react-router-dom/NavLink';
import axios from 'axios';
import { Grid, Row, Col, ButtonToolbar, Button, Modal } from 'react-bootstrap';

import './Exercises.css';

class Exercises extends Component{
    constructor(props) {
        super(props);
  
        this.handleShow = this.handleShow.bind(this);
        this.handleHide = this.handleHide.bind(this);
  
        this.state = {
            problems: [{
                problemTitle: "Hola!",
                problemStatement: "descripcion?",
                language: "Java"
            }]
        };
    }

    handleShow = (i) => (e) => {
        const newProblems = this.state.problems.map((problem, j) => {
          if (i !== j) return problem;
          return { ...problem, show: true,  };
        });
        this.setState({ problems: newProblems });
    }
  
    handleHide = (i) => (e) => {
        const newProblems = this.state.problems.map((problem, j) => {
            if (i !== j) return problem;
            
            return { ...problem, show: false,  };
        });

        this.setState({ problems: newProblems });
    }
  
  
    componentDidMount() {
        axios.get('http://165.227.48.161:8082/problems')
             .then(res => {
                const problems = res.data;
                this.setState({problems});
                console.log(problems.length);
                const asd = {show: false};
                for (var i = 0; i < problems.length; i++) {
                    problems[i] = {...problems[i], ...asd };
                }
                this.setState(problems);
                console.log(this.state.problems);
            })
    }
    
    render(){
        return(
            <Grid bsClass="exercises">
                <Row>
                    <Col xs={4} xsPush={4}>
                        <div className="exercises-title">
                            <h1>Ejercicios propuestos</h1>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <table className="table">
                            <thead>
                                <tr>
                                <th className= "number">Id</th>
                                <th className="th-description">Título</th>
                                <th className="th-description">Descripción</th>
                                <th className="th-description">Lenguaje</th>
                                <th className="th-description">Resolver</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.problems.map((item,i) => (
                                <tr>
                                    <td className="td-name">
                                        {i}
                                    </td>
                                    
                                    <td>
                                    {item.problemTitle}
                                    </td>
                                    
                                    <td>
                                        <ButtonToolbar className="td-btn-view">
                                            <Button className="btn-view" onClick={this.handleShow(i)}>
                                        </Button>
                                    
                                        <Modal
                                            show={this.state.problems[i].show}
                                            onHide={this.handleHide(i)}
                                            dialogClassName="custom-modal"
                                        >
                                            <Modal.Header closeButton>
                                                Problema número {i+1}
                                                <Modal.Title id="contained-modal-title-lg">
                                                    {this.problemTitle}
                                                </Modal.Title>
                                            </Modal.Header>
                                            
                                            <Modal.Body>
                                                <h4>Descripción</h4>
                                                <p>
                                                    {item.problemStatement}
                                                </p>
                                            </Modal.Body>
                                            
                                            <Modal.Footer>
                                                <Button onClick={this.handleHide(i)}>Close</Button>
                                            </Modal.Footer>
                                        </Modal>
                                    </ButtonToolbar>
                                    </td>
                                    <td>
                                        {item.language}
                                    </td>
                                    <td className="td-actions">
                                    <div className="td-btn-solve">
                                        <NavLink className="btn-solve" to={'/exercises/' + item.problemId}>._._.</NavLink>
                                    </div>
                                    </td>
                                </tr>
                                ))}
                            </tbody>
                        </table>
                    </Col>
                </Row>    
            </Grid>
        );
    }
}

export default Exercises;