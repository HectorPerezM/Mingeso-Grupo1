import React, { Component } from "react";
import axios from 'axios';
import {Button, ControlLabel, FormControl} from "react-bootstrap";

class Form extends Component {

  state = {
    problemName: "",
    input: "",
    output: "",
    description: "",
    language: "",
    algoritmo: ""
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("el algoritmo que será evaluado es: "+this.state.algoritmo);
    // this.props.onSubmit(this.state);
    //this.setState({
    //  algoritmo: ""
    //});
  };


  componentDidMount() {
    axios.get('http://165.227.48.161:8082/problems/'+this.props.match.params.id)
      .then(res => {
        const problem = res.data;
        console.log(problem);
        this.setState({
          problemTitle: problem.problemTitle,
          input: "",
          output: "",
          description: problem.problemStatement,
          language: problem.language,
          algoritmo: ""
        });
      })
  };

  render() {
    return (
      <div className="formStudent">
      <h1 className="title">Problema: {this.state.problemTitle}</h1>
      <h4 className="title">Lenguaje: {this.state.language}</h4>
      <h5 className="description">{this.state.description}</h5>

      <form>
        <br />
        <ControlLabel>Solución al problema:</ControlLabel>
        <FormControl  name="algoritmo"
        componentClass="textarea"
        placeholder="Desarrolla tu algoritmo aquí..."
        value={this.state.algoritmo}
        onChange={e => this.change(e)}/>

        <br />
        <Button onClick={e => this.onSubmit(e)} type="submit">Evaluar</Button>
        <br />
      </form>
      </div>
    );
  }
}

export default Form;
