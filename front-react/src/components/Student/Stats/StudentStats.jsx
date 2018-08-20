import React, { Component } from "react";
import { Chart } from 'react-google-charts';
import {Row, Col, Grid} from "react-bootstrap";

import './StudentStats.css';

export class StudentStats extends Component {
  render() {

    var data = [
      ["Task","Hours per Day"],
      ["Python",11],
      ["C",5],
      ["Java",2]
    ]

    var options = {
      title:"% de Lenguajes que has utilizado",
      is3D:true,
    }


    return (
        <div className="container">
            <Row>
                <Col xs={12}>
                        <h1 className="title">Tus estadísticas</h1>
                </Col>
            </Row>
            <div className="body">
                <Row>
                    <Col xs={12}>
                        <div className="stats-charts">
                            <Chart 
                                chartType="PieChart"
                                data={data}
                                options={options}
                                // graph_id="card-pieChart"
                                height="250px"
                                width="350px"
                                />
                        </div>
                        <div className="stats-charts">
                            <Chart 
                                chartType="PieChart"
                                data={data}
                                options={options}
                                // graph_id="card-pieChart"
                                height="350px"
                                width="350px"
                                />
                        </div>
                    </Col>
                </Row>
            </div>
            <Row>
                <Col xs={12}>

                </Col>
            </Row>
        </div>
    );
  }
}

export default StudentStats;
