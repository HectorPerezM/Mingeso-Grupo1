import React, { Component } from "react";
import axios from 'axios';
import {Button, ControlLabel, FormControl} from "react-bootstrap";
import MonacoEditor from 'react-monaco-editor';
import { MonacoDiffEditor } from 'react-monaco-editor';

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
    alert("el algoritmo que será evaluado es: "+this.state.code);
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
      <div className="formStudent">
      <h1 className="title">Problema: {this.state.problemTitle}</h1>
      <h4 className="title">Lenguaje: {this.state.language}</h4>
      <h5 className="description">{this.state.description}</h5>
      <form>
        <br />

        <MonacoEditor
        width="800"
        height="600"
        language="java"
        theme="vs-dark"
        value={code}
        options={options}
        onChange={this.onChange}
        editorDidMount={this.editorDidMount}
      />
        <br />
        <Button onClick={e => this.onSubmit(e)} type="submit">Evaluar</Button>
        <br />
      </form>
      </div>
    );
  }
}

export default Form;
