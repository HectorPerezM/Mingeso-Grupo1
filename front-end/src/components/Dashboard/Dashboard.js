import React, { Component } from "react";
import { Chart } from 'react-google-charts';
import {Row, Col} from "react-bootstrap";
import ChartistGraph from 'react-chartist';
import './Css/Dashboard.css';
import {ButtonToolbar,Button, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import {NavLink} from 'react-router-dom';


class Dashboard extends Component {

  constructor() {
    super();
    this.state = {
      section: 'A1',
      students: [{name: "Juanito", rut:'19.210.563-3', studentId: 1},{name: "Lalo", rut:'19.083.793-9', studentId: 2}],
      inputs: [{ inputValue: '', inputType: 'String' }],
      language: 'Python',
    };
  }

  Change = (e) => {
    //this.setState({ [e.target.name]: e.target.value });
  }

  render() {


    return (
      <div className="card">
          <h3 className="card-title">Secciones</h3>
            <div className="card-body">
            <h4>Problemas resueltos los ultimos 7 dias.</h4>
            <Row>
            <Col xs={12} md={1}>
            Seccion:
            </Col>
            <Col xs={12} md={3}>
              <FormControl
              componentClass="select"
              placeholder="select"
              name="section"
              value={this.state.section}
              onChange={e => this.Change(e)}>
                <option value="String">A-1</option>
                <option value="Integer">B-2</option>
              </FormControl>
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
                    <td className="td-name">
                      {i}
                    </td>
                    <td>
                      {item.name}
                    </td>
                    <td>
                      {item.rut}
                    </td>
                    <td >
                      <div className="td-btn-solve">
                        <NavLink className="btn-solve" to={'/estadisticas/' + item.studentId}>././.</NavLink>
                      </div>
                    </td>
                  </tr>
                ))}


              </tbody>
            </table>

              <div className="footer">
              </div>
            </div>
      </div>
    );
  }
}

export default Dashboard;
