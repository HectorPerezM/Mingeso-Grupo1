import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';
import {ButtonToolbar, Button, Modal} from "react-bootstrap";


class Problems extends Component {
  constructor(props) {
      super(props);

      this.handleShow = this.handleShow.bind(this);
      this.handleHide = this.handleHide.bind(this);

      this.state = {
        problems: []
      };
    }


    handleShow = (i) => (e) => {
      const newProblems = this.state.problems.map((problem, j) => {
        if (i !== j) return problem;
        return { ...problem, show: true,  };
      });
      this.setState({ problems: newProblems });
    }

    handleRemove = (id) => (e) => {
      // console.log(id);
      axios.delete('http://localhost:8082/problems/'+id);
      // this.setState(this.state);

      

    }

    handleHide = (i) => (e) => {
      const newProblems = this.state.problems.map((problem, j) => {
        if (i !== j) return problem;
        return { ...problem, show: false,  };
      });
      this.setState({ problems: newProblems });
    }


      componentWillMount() {
        axios.get('http://localhost:8082/problems')
          .then(res => {
            const problems = res.data;
            this.setState({problems});
            // console.log(problems.length);
            //const asd = {show: false};
            //for (var i = 0; i < problems.length; i++) {
            // problems[i] = {...problems[i], ...asd };
            //}
            //this.setState(problems);
            // console.log(this.state.problems);
          })
      }
  render() {
  return (
    <div className="container">
      <h2 className="title">Ejercicios</h2>
      <div className="body">
      <div className="card">
          <h3 className="card-title">Lista de ejercicios</h3>
            <div className="card-body">
            <table className="table">
              <thead>
                <tr>
                  <th className= "number">Nº</th>
                  <th className="th-description">Título</th>
                  <th className="th-description">Descripción</th>
                  <th className="th-description">Editar</th>
                  <th className="th-description">Eliminar</th>
                </tr>
              </thead>
              <tbody>

                {this.state.problems.map((item,i) => (
                  <tr>
                    <td className="td-name">
                      {i+1}
                    </td>
                    <td>
                      {item.problemTitle}
                    </td>
                    <td>
                      <ButtonToolbar>
                      <Button bsStyle="primary" onClick={this.handleShow(i)}>
                      <i class="far fa-eye"></i>
                      </Button>
                      <Modal
                        show={this.state.problems[i].show}
                        onHide={this.handleHide(i)}
                        dialogClassName="custom-modal"
                      >
                        <Modal.Header closeButton>
                          Ejercicio Nº {i+1}
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
                          <Button onClick={this.handleHide(i)}>Cerrar</Button>
                        </Modal.Footer>
                      </Modal>
                    </ButtonToolbar>
                    </td>
                    <td>
                    <NavLink className="btn btn-primary"
                                             to={'/edit/' + item.problemId}><i class="fas fa-edit"></i> </NavLink>
                    </td>
                    <td>
                    <Button bsStyle="danger" onClick={this.handleRemove(item.problemId)} ><i class="fas fa-trash-alt"></i> </Button>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    );
  }
  }
  export default Problems;
