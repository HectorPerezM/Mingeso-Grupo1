import React, { Component } from "react";
import './Analisis.css';

export class Analisis extends Component {
  constructor(props){
    super(props);
    this.state = {
      isEvaluated: this.props.evaluated,
      variables: 0,
      erroresIdentacion: 0,
      codigoComentado: '',
      erroresFunciones: 0,
      bloquePrincipal: '',
      resultado: "Incompleto",
      analisis: "Sin analisis"
    }
  }

  componentWillMount(){
    if(this.state.isEvaluated){
      this.setState({
        variables: this.props.evaluacion.variables,
        erroresIdentacion: this.props.evaluacion.erroresIdentacion,
        codigoComentado: this.props.evaluacion.codigoComentado,
        erroresFunciones: this.props.evaluacion.erroresFunciones,
        bloquePrincipal: this.props.evaluacion.bloquePrincipal
      })
    }
  }

  render() {
      if(this.state.isEvaluated){
        return(
          <div className="card">

              <h3 className="card-title">Analisis del programa</h3>
                <div className="card-body">
                <h4>Resultado</h4>
                <p>
                  - {this.props.resultado}
                </p>
                <hr/>
                <h4>Practicas de programacion</h4>
                <p>
                  {this.props.analisis}
                </p>
                <hr/>
                <h4>Tiempo </h4>
                <p>
                  -{Math.trunc(this.props.tiempo /60000)} min. y {(Math.trunc(this.props.tiempo /1000) % 60)} seg.
                </p>
                  <div className="footer">
                  </div>
                </div>
          </div>
        );
      } else {
        return(
          <div className="card">
              <h3 className="card-title">Buenas prácticas</h3>
                <div className="card-body">
                  <h4>Variables.</h4>
                    <p> - Cada variable debe tener un nombre representativo, por ejemplo, que no sean letras mezcladas con números.</p>
                  <hr />

                  <h4>Identación y comentarios.</h4>
                  <p> - Recuerda que debes comentar tu código, además de identar correctamente.</p>

                  <hr />

                  <h4>Funciones y procedimientos.</h4>
                  <p> - Además, cada función y/o procedimiento debe estar comentado correctamente con una entrada, salida y breve descricpción de lo que realiza la función.</p>
                  <hr />

                  <h4>Bloque principal.</h4>
                  <p> - También debes esctructurar correctamente el bloque principal.</p>
              </div>
          </div>
        );
      }
  }
}

export default Analisis;
