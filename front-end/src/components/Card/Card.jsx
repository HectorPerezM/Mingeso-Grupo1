import React, { Component } from "react";
import { Chart } from 'react-google-charts';

export class Card extends Component {

  render() {

    var data = [
      ["Task","Hours per Day"],
      ["Python",11],
      ["C",5],
      ["Java",2]
    ]

    var options = {
      title:"Lenguaje utilizado",
      is3D:true,
    }


    return (
      <div className="card">
        <div className={"card-header"}>
            <h3 className="card-header-title"><small>Rendimiento del Alumno</small></h3>
        </div>
        <div className="card-body">
          <div id="chartPreferences" className="pieChart">
            <Chart
                      chartType="PieChart"
                      data={data}
                      options={options}
                      graph_id="card-pieChart"
                      height="400px"
                      width="400px"
                      />
          </div>
          <div className="footer">
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
