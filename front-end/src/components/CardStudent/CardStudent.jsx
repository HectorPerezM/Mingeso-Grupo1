import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import './Css/Card.css';




export class CardStudent extends Component {


  render() {


    return (
      <div className="card">
          <h3 className="card-title">Rendimiento del Alumno</h3>
            <div className="card-body">
            <h4>Variables</h4>
            <p>
              - Tienes 3 variables con nombres NO representativos.
            </p>
            <hr />
            <h4>Identación y comentarios.</h4>
            <p>
              - Tienes 3 errores de identación.
            </p>
            <p>
              - Código comentado correctamente.
            </p>
            <hr />

            <h4>Funciones y procedimientos.</h4>
            <p>
            - Tienes 4 funciones y/o procedimientos con comentarios incompletos.
            </p>

            <hr />

            <h4>Bloque principal.</h4>
            <p>
              - El bloque principal no esta estructurado correctamente.
            </p>
              <div className="footer">
              </div>
            </div>
      </div>
    );
  }
}

export default CardStudent;
