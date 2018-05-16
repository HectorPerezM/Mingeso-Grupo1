import React, { Component } from "react";
import axios from 'axios';
import dynamicInput from './dynamicInput.js';

class Form extends Component {
  constructor(props) {
      super(props);
}
  state = {
    problemName: "",
    input: "",
    output: "",
    description: "",
  };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    console.log(this.state);
    this.setState({
      problemName: "",
      input: "",
      output: "",
      description: ""
    });
  };


  componentDidMount() {

    axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05', {
    params: {
      id: 1
    }
  })
      .then(res => {
        const problems = res.data;
        console.log(problems);
        console.log(this.props.match.params.id);
        alert(this.props.match.params.id);
      })
  };

  render() {
    return (
      <div className="formStudent">
      <h1 className="title">Añadir un problema a la plataforma</h1>
      <h5 className="description">description cualquier cosa cualquierdescription cualquier cosadescription
      cualquier cosa cualquier cualquierdescription cualquier cosa cualquierdescription cualquier cosa
      cualquierdescription cualquier cosa cualquierdescription cualquier cosa cualquierdescription
      cualquier cosa cualquier
      </h5>

      <form>
        <input
          name="output"
          placeholder="output of the problem"
          value={this.state.output}
          onChange={e => this.change(e)}
        />
        <br />
        <label>
          <textarea name="algoritmo"
          placeholder="Desarrolla tu algoritmo aqui..."
          value={this.state.description}
          onChange={e => this.change(e)} />
        </label>
        <br />
        <button onClick={e => this.onSubmit(e)}>Evaluar</button>
        <br />
      </form>
      </div>
    );
  }
}

export default Form;
