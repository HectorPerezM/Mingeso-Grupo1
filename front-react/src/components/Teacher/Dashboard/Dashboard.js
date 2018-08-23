import React, { Component } from "react";
import {Redirect} from 'react-router-dom';
import { Chart } from 'react-google-charts';
import {Row, Col} from "react-bootstrap";
import './Css/Dashboard.css';
import {ButtonToolbar,Button, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';


class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      section: "A1",
      degree: '1',
      all: "Todos los alumnos",
      students:[
        {name: "Juan De Pablo", rut:'19.210.563-3', studentId: 1},
        {name: "Carlos Álvarez S.", rut:'19.123.793-9', studentId: 2},
        {name: "Héctor Pérez M.", rut:'19.123.122-9', studentId: 3},
      ],
      studentsA1: [
        {name: "Juan De Pablo", rut:'19.210.563-3', studentId: 1},
        {name: "Carlos Álvarez S.", rut:'19.123.793-9', studentId: 2},
        {name: "Héctor Pérez M.", rut:'19.123.122-9', studentId: 3},
      ],
      studentsB1: [
        {name: "Felipe M.", rut:'19.210.563-3', studentId: 1},
        {name: "Carlos A.", rut:'19.123.123-9', studentId: 2},
        {name: "Héctor P.", rut:'19.183.123-4', studentId: 3},
        {name: "Juan D.", rut:'19.123.317-9', studentId: 4},
      ]
    };
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  Filter = (e) => {
    this.state.section == "A1" ?
    this.setState({ students: this.state.studentsA1 }):
    this.setState({ students: this.state.studentsB1 })
  }


  render() {




    return (
      <Row>
      <Col xs={12}>
        <div className="container">
        <h2 className="title">Estadísticas</h2>
          <div className="body">
            <Row>
            <Col xs={12} md={6}>
            <div className="card">
                <h3 className="card-title">Secciones</h3>
                  <div className="card-body">
                  <h4>Estadisticas por seccion</h4>
                  <Row>
                  <Col xs={12} md={2}>
                  <h5>Seccion:</h5>
                  </Col>
                  <Col xs={6} md={3}>
                    <FormControl
                    componentClass="select"
                    placeholder="select"
                    name="section"
                    value={this.state.section}
                    onChange={e => this.Change(e)}>
                      <option value="A1">A-1</option>
                      <option value="B2">B-2</option>
                    </FormControl>
                  </Col>
                  <Col xs={6} xsPush={4} md={2} mdPush={5}>
                    <Button onClick={e => this.Filter(e)}>Filtrar</Button>
                  </Col>
                  </Row>
                  <br/>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className= "number">N°</th>
                        <th className="th-description">Nombre</th>
                        <th className="th-description">Rut</th>
                        <th className="th-description">Ver</th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.state.students.map((item,i) => (
                        <tr>
                          <td className="td">
                            {i+1}
                          </td>
                          <td className="td">
                            {item.name}
                          </td>
                          <td className="td">
                            {item.rut}
                          </td>
                          <td >
                            <Link className="ojo" to={'/statistics/student/' + item.name}>
                            <i class="far fa-eye"></i>
                            </Link>
                          </td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                  <hr/>
                  </div>
            </div>
            </Col>
            <Col xs={12} md={6}>
              <div className="card">
                <h3 className="card-title">Carreras</h3>
                <div className="card-body">
              <Row>
              <Col xs={6} md={5}>
              <FormControl
              componentClass="select"
              placeholder="select"
              name="degree"
              value={this.state.degree}
              onChange={e => this.Change(e)}>
                <option value="1">Ingenieria Civil Informatica</option>
                <option value="2">Ingenieria Civil Electrica</option>
                <option value="3">Ingenieria Civil Minas</option>
                <option value="4">Ingenieria Civil Obras civiles</option>
                <option value="5">Ingenieria Ejecucion Informatica</option>
                <option value="6">Ingenieria Ejecucion Electrica</option>
                <option value="7">Ingenieria Ejecucion Minas</option>
                <option value="8">Ingenieria Ejecucion Obras civiles</option>
              </FormControl>
              </Col>
              <Col xs={6} xsPush={2} md={4} mdPush={3}>
                <Link className="ojo" to={'/statistics/degree/' + this.state.degree}>
                  <i class="far fa-eye"> Ver estadisticas</i>
                </Link>
              </Col>
              </Row>
              <hr/>
              <Row>
              <Col xs={12} md={6}>
                <Link className="ojo" to={'/statistics/degree/' + this.state.all}>
                  <i class="far fa-eye"> Ver estadisticas generales</i>
                </Link>
              </Col>
              </Row>
            </div>
            </div>
            </Col>
            </Row>

          </div>
        </div>
        </Col>
        </Row>
    );
  }
}

export default Dashboard;
