import React, { Component } from "react";
import axios from 'axios';
import {Button} from "react-bootstrap";
import MonacoEditor from 'react-monaco-editor';

class Form extends Component {

  state = {
    problemName: "",
    input: "",
    output: "",
    description: "",
    language: "",
    code: ""
  };

  editorDidMount(editor, monaco) {
      console.log('editorDidMount', editor);
      editor.focus();
    }
    onChange = (newValue, e) => {
      console.log('onChange', newValue, e);
      this.setState({
        code: newValue
      });
    };

  change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    alert("el algoritmo que será evaluado es: \n"+this.state.code.toString());
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
          code: ""
        });
      })
  };

  render() {
    const code = this.state.code;
    const options = {
      selectOnLineNumbers: true,
      roundedSelection: true,
      readOnly: false,
      cursorStyle: 'line',
      parameterHints: true
    };
    return (
      <div className="form-student">
        <h2 className="form-student-title"><small>RESOLVER PROBLEMA</small></h2>
        <h3 className="form-student-problem-title"><small>PROBLEMA: {this.state.problemTitle}</small></h3>
        <h4 className="form-student-problem-language"><small>LENGUAJE: {this.state.language}</small></h4>
        <h5 className="form-student-problem-description"><small>{this.state.description}</small></h5>
        <form>
          <br />
          <div className="form-student-monaco">
          <MonacoEditor
          className="form-student-monaco-editor"
          width="100%"
          height="600"
          language="java"
          theme="vs-dark"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
          />
          </div>
          <br />
          <Button onClick={e => this.onSubmit(e)} type="submit">Evaluar</Button>
          <br />
        </form>
      </div>
    );
  }
}

export default Form;
