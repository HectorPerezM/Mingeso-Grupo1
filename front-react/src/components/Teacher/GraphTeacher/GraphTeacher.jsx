import React, { Component } from "react";
import { Chart } from 'react-google-charts';
import {Row, Col} from "react-bootstrap";
import './Css/Graph.css';




export class GraphTeacher extends Component {


  render() {

    var data = [
      ["Fecha", "Juan De Pablo", "Promedio Seccion","Promedio Carrera","Todos"],
      ["7-Ago", 10, 6 , 4, 5],
      ["8-Ago", 2, 4 , 4, 5],
      ["9-Ago", 1, 8 , 4, 5],
      ["10-Ago", 4, 3 , 4, 5],
      ["11-Ago", 6, 2 , 4, 5],
      ["12-Ago", 5, 1 , 4, 5],
      ["13-Ago", 7, 5 , 4, 5],
    ];
    const options = {
      title: "N° de problemas",
      curveType: "function",
      legend: { position: "bottom" }
    };

    var data2 = [
      ["Fecha", "Juan De Pablo", "Promedio Seccion","Promedio Carrera","Todos"],
      ["7-Ago", 50, 45 , 32, 39],
      ["8-Ago", 43, 49 , 33, 38],
      ["9-Ago", 32, 35 , 45, 28],
      ["10-Ago", 12, 8 , 16, 19],
      ["11-Ago", 26, 35 , 30, 22],
      ["12-Ago", 66, 55 , 48, 60],
      ["13-Ago", 23, 42 , 35, 45],
    ];
    const options2 = {
      title: "Tiempo promedio por problema",
      curveType: "function",
      legend: { position: "bottom" }
    };

    var data3 = [
      ["Task","Hours per Day"],
      ["Python",11],
      ["C",5],
      ["Java",2]
    ]

    var options3 = {
      title:"Lenguaje utilizado",
      pieHole:0.4,
      is3D:true,
    }


    return (
      <div className="container">
      <h2 className="title">Dashboard</h2>
      <div className="body">
      <div className="card">
          <h3 className="card-title">Rendimiento del Alumno</h3>
            <div className="card-body">
            <h4>Estadisticas ultimos 7 dias .</h4>
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

export default GraphTeacher;
