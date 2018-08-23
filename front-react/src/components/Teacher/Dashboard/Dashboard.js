import React, { Component } from "react";
import { Chart } from 'react-google-charts';
import {Row, Col} from "react-bootstrap";
import './Css/Dashboard.css';
import {ButtonToolbar,Button, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import {Link, NavLink} from 'react-router-dom';


class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      section: 'A1',
      degree: 'Minas',
      students: [
        {name: "Juan De Pablo", rut:'19.210.563-3', studentId: 1},
        {name: "Carlos Álvarez S.", rut:'19.123.793-9', studentId: 2},
        {name: "Héctor Pérez M.", rut:'19.123.122-9', studentId: 3},
      ],
      studentsb2: [
        {name: "Felipe M.", rut:'19.210.563-3', studentId: 1},
        {name: "Carlos A.", rut:'19.123.123-9', studentId: 2},
        {name: "Héctor P.", rut:'19.183.123-4', studentId: 3},
        {name: "Juan D.", rut:'19.123.317-9', studentId: 4},
      ],
      inputs: [{ inputValue: '', inputType: 'String' }],
      language: 'Python',
    };
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
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
                  <Col xs={12} md={3}>
                    <FormControl
                    componentClass="select"
                    placeholder="select"
                    name="section"
                    value={this.state.section}
                    onChange={e => this.Change(e)}>
                      <option value="A-1">A-1</option>
                      <option value="B-2">B-2</option>
                    </FormControl>
                  </Col>
                  <Col xs={12} md={5}>
                  </Col>
                  <Col xs={12} md={2}>
                    <Button onClick={e => this.Change(e)}>Filtrar</Button>
                  </Col>
                  </Row>
                  <br/>
                  <table className="table">
                    <thead>
                      <tr>
                        <th className= "number">ID</th>
                        <th className="th-description">Nombre</th>
                        <th className="th-description">Rut</th>
                        <th className="th-description">Ver</th>
                      </tr>
                    </thead>
                    <tbody>

                      {this.state.students.map((item,i) => (
                        <tr>
                          <td className="td">
                            {i}
                          </td>
                          <td className="td">
                            {item.name}
                          </td>
                          <td className="td">
                            {item.rut}
                          </td>
                          <td >
                            <Link className="ojo" to={'/estadisticas/' + item.studentId}>
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
              <Col xs={12} md={5}>
              <FormControl
              componentClass="select"
              placeholder="select"
              name="degree"
              value={this.state.degree}
              onChange={e => this.Change(e)}>
                <option value="1">Ingenieria civil Informatica</option>
                <option value="2">Ingenieria civil Electrica</option>
                <option value="3">Ingenieria civil Minas</option>
                <option value="4">Ingenieria civil Obras civiles</option>
                <option value="5">Ingenieria ejecucion Informatica</option>
                <option value="6">Ingenieria ejecucion Electrica</option>
                <option value="7">Ingenieria ejecucion Minas</option>
                <option value="8">Ingenieria ejecucion Obras civiles</option>
              </FormControl>
              </Col>
              <Col xs={12} md={3}>
              </Col>
              <Col xs={12} md={3}>
                <Button onClick={e => this.Change(e)}> Ver estadisticas</Button>
              </Col>
              </Row>
              <hr/>
              <Row>
              <Col xs={12} md={3}>
                <Button onClick={e => this.Change(e)}> Ver estadisticas generales</Button>
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
