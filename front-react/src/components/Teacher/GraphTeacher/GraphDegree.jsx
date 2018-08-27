import React, { Component } from "react";
import { Chart } from 'react-google-charts';
import {Row, Col} from "react-bootstrap";
import './Css/Graph.css';
import {Redirect, Link} from 'react-router-dom';





export class GraphDegree extends Component {
  constructor() {
    super();
    this.state = {
      name: "Carrera",
       dateStart: "07-08-2018",
      dateEnd: "27-08-2018",
      data1:[],
      data2:[]
    };
  }

  componentWillMount()
  {
    this.props.match.params.id == "1" ?
    this.setState({ name: "Carrera Ingenieria Civil Informatica"}):
    this.props.match.params.id == "2" ?
    this.setState({ name: "Carrera Ingenieria Civil Electrica"}):
    this.props.match.params.id == "3" ?
    this.setState({ name: "Carrera Ingenieria Civil Minas"}):
    this.props.match.params.id == "4" ?
    this.setState({ name: "Carrera Ingenieria Civil Obras civiles"}):
    this.props.match.params.id == "5" ?
    this.setState({ name: "Carrera Ingenieria Ejecucion Informatica"}):
    this.props.match.params.id == "6" ?
    this.setState({ name: "Carrera Ingenieria Ejecucion Electrica"}):
    this.props.match.params.id == "7" ?
    this.setState({ name: "Carrera Ingenieria Ejecucion Minas"}):
    this.props.match.params.id == "8" ?
    this.setState({ name: "Carrera Ingenieria Ejecucion Obras civiles"}):
    this.setState({ name: this.props.match.params.id});


  }

  render() {
    var rand = require('random-seed').create();

    var data =
      this.props.match.params.id == "Todos los alumnos" ?
      [
      ["Fecha","Todos"],
      ["7-Ago", rand(10)],
      ["8-Ago", rand(10)],
      ["9-Ago", rand(10)],
      ["10-Ago", rand(10)],
      ["11-Ago", rand(10)],
      ["12-Ago", rand(10)],
      ["13-Ago", rand(10)],
      ["14-Ago", rand(10)],
      ["15-Ago", rand(10)],
      ["16-Ago", rand(10)],
      ["17-Ago", rand(10)],
      ["18-Ago", rand(10)],
      ["19-Ago", rand(10)],
      ["20-Ago", rand(10)],
      ["21-Ago", rand(10)],
      ["22-Ago", rand(10)],
      ["23-Ago", rand(10)],
      ["24-Ago", rand(10)],
      ["25-Ago", rand(10)],
      ["26-Ago", rand(10)],
      ["27-Ago", rand(10)],
    ]:
      [
      ["Fecha", this.state.name,"Promedio Carreras","Todos"],
      ["7-Ago", rand(10), rand(10) , rand(10)],
      ["8-Ago", rand(10), rand(10) , rand(10)],
      ["9-Ago", rand(10), rand(10) , rand(10)],
      ["10-Ago", rand(10), rand(10) , rand(10)],
      ["11-Ago", rand(10), rand(10) , rand(10)],
      ["12-Ago", rand(10), rand(10) , rand(10)],
      ["13-Ago", rand(10), rand(10) , rand(10)],
      ["14-Ago", rand(10), rand(10) , rand(10)],
      ["15-Ago", rand(10), rand(10) , rand(10)],
      ["16-Ago", rand(10), rand(10) , rand(10)],
      ["17-Ago", rand(10), rand(10) , rand(10)],
      ["18-Ago", rand(10), rand(10) , rand(10)],
      ["19-Ago", rand(10), rand(10) , rand(10)],
      ["20-Ago", rand(10), rand(10) , rand(10)],
      ["21-Ago", rand(10), rand(10) , rand(10)],
      ["22-Ago", rand(10), rand(10) , rand(10)],
      ["23-Ago", rand(10), rand(10) , rand(10)],
      ["24-Ago", rand(10), rand(10) , rand(10)],
      ["25-Ago", rand(10), rand(10) , rand(10)],
      ["26-Ago", rand(10), rand(10) , rand(10)],
      ["27-Ago", rand(10), rand(10) , rand(10)],
    ];


    const options = {
      title: "N° de problemas",
      curveType: "function",
      legend: { position: "bottom" }
    };

    var data2 =
      this.props.match.params.id == "Todos los alumnos" ?
      [
      ["Fecha","Todos"],
      ["7-Ago", rand(70)],
      ["8-Ago", rand(70)],
      ["9-Ago", rand(70)],
      ["10-Ago", rand(70)],
      ["11-Ago", rand(70)],
      ["12-Ago", rand(70)],
      ["13-Ago", rand(70)],
      ["14-Ago", rand(70)],
      ["15-Ago", rand(70)],
      ["16-Ago", rand(70)],
      ["17-Ago", rand(70)],
      ["18-Ago", rand(70)],
      ["19-Ago", rand(70)],
      ["20-Ago", rand(70)],
      ["21-Ago", rand(70)],
      ["22-Ago", rand(70)],
      ["23-Ago", rand(70)],
      ["24-Ago", rand(70)],
      ["25-Ago", rand(70)],
      ["26-Ago", rand(70)],
      ["27-Ago", rand(70)],
    ]:
      [
      ["Fecha", this.state.name,"Promedio Carrera","Todos"],
      ["7-Ago", rand(70), rand(70) , rand(70)],
      ["8-Ago", rand(70), rand(70) , rand(70)],
      ["9-Ago", rand(70), rand(70) , rand(70)],
      ["10-Ago", rand(70), rand(70) , rand(70)],
      ["11-Ago", rand(70), rand(70) , rand(70)],
      ["12-Ago", rand(70), rand(70) , rand(70)],
      ["13-Ago", rand(70), rand(70) , rand(70)],
      ["14-Ago", rand(70), rand(70) , rand(70)],
      ["15-Ago", rand(70), rand(70) , rand(70)],
      ["16-Ago", rand(70), rand(70) , rand(70)],
      ["17-Ago", rand(70), rand(70) , rand(70)],
      ["18-Ago", rand(70), rand(70) , rand(70)],
      ["19-Ago", rand(70), rand(70) , rand(70)],
      ["20-Ago", rand(70), rand(70) , rand(70)],
      ["21-Ago", rand(70), rand(70) , rand(70)],
      ["22-Ago", rand(70), rand(70) , rand(70)],
      ["23-Ago", rand(70), rand(70) , rand(70)],
      ["24-Ago", rand(70), rand(70) , rand(70)],
      ["25-Ago", rand(70), rand(70) , rand(70)],
      ["26-Ago", rand(70), rand(70) , rand(70)],
      ["27-Ago", rand(70), rand(70) , rand(70)],
    ];


    var data22 = [
      ["Fecha","Todos"],
      ["7-Ago", rand(70)],
      ["8-Ago", rand(70)],
      ["9-Ago", rand(70)],
      ["10-Ago", rand(70)],
      ["11-Ago", rand(70)],
      ["12-Ago", rand(70)],
      ["13-Ago", rand(70)],
      ["14-Ago", rand(70)],
      ["15-Ago", rand(70)],
      ["16-Ago", rand(70)],
      ["17-Ago", rand(70)],
      ["18-Ago", rand(70)],
      ["19-Ago", rand(70)],
      ["20-Ago", rand(70)],
      ["21-Ago", rand(70)],
      ["22-Ago", rand(70)],
      ["23-Ago", rand(70)],
      ["24-Ago", rand(70)],
      ["25-Ago", rand(70)],
      ["26-Ago", rand(70)],
      ["27-Ago", rand(70)],
    ];

    var data11 = [
      ["Fecha","Promedio Carrera","Todos"],
      ["7-Ago", rand(10)],
      ["8-Ago", rand(10)],
      ["9-Ago", rand(10)],
      ["10-Ago", rand(10)],
      ["11-Ago", rand(10)],
      ["12-Ago", rand(10)],
      ["13-Ago", rand(10)],
      ["14-Ago", rand(10)],
      ["15-Ago", rand(10)],
      ["16-Ago", rand(10)],
      ["17-Ago", rand(10)],
      ["18-Ago", rand(10)],
      ["19-Ago", rand(10)],
      ["20-Ago", rand(10)],
      ["21-Ago", rand(10)],
      ["22-Ago", rand(10)],
      ["23-Ago", rand(10)],
      ["24-Ago", rand(10)],
      ["25-Ago", rand(10)],
      ["26-Ago", rand(10)],
      ["27-Ago", rand(10)],
    ];
    const options2 = {
      title: "Tiempo promedio por problema (seg.)",
      curveType: "function",
      legend: { position: "bottom" }
    };

    var data3 = [
      ["lenguage","count of problems"],
      ["Python",11*rand(15)],
      ["C",11*rand(15)],
      ["Java",11*rand(15)]
    ]

    var options3 = {
      title:"Lenguaje utilizado",
      pieHole:0.4,
      is3D:true,
    }


    return (

      <div className="container">
      <div className="form-student-title">
          <Row>
              <Col xs={12}>
                  <Link to="/dashboard">
                      <div className="problem-title-icon">
                          <i class="fas fa-angle-double-left"></i>
                      </div>
                  </Link>
                  <div className="problem-title">
                      <h2>Dashboard</h2>
                  </div>
              </Col>
          </Row>
      </div>
      <div className="body">
      <div className="card">
          <h3 className="card-title">{this.state.name}</h3>
            <div className="card-body">
            <h4>Estadisticas ultimos 20 dias</h4>
            <Row>
            <Col  xs={12} md={5} className="col">
              <div id="chartPreferences" className="pieChart">
                <Chart
                          chartType="PieChart"
                          data={data3}
                          options={options3}
                          graph_id="ScatterChart"
                          height="400px"
                          width="100%"
                          />
              </div>
            </Col>
            <Col  xs={12} md={7} className="col">
              <div className="asd">
                <Chart
                  chartType="LineChart"
                  width="100%"
                  height="300px"
                  data={data}
                  options={options}
                />
              </div>
            </Col>
            </Row>
            <hr />
            <div className="asd">
              <Chart
                chartType="LineChart"
                width="100%"
                height="300px"
                data={data2}
                options={options2}
              />
            </div>
            <hr />


              <div className="footer">
              </div>
            </div>
      </div>
    </div>
    </div>
    );
  }
}

export default GraphDegree;
