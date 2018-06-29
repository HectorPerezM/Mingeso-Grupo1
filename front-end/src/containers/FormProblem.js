import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import {Button, FormGroup, ControlLabel, FormControl, HelpBlock} from "react-bootstrap";
import Cancel from "../images/cancel-button.png";

const examples = problem => {
  const newInputs = problem.inputs.map((input, i) => {
    return {'inputType': input.inputType, 'inputValue': input.inputValue}
  });
  return newInputs;
}

const addProblem = problem => {
  const inputs = examples(problem);
  console.log(inputs);
  fetch('http://165.227.48.161:8082/problems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "problemTitle": problem.title,
        "problemStatement": problem.description,
        "problemExamples": [
          {
            "exampleTitle": problem.title,
            "result":{
              "resultType": problem.output,
              "resultValue": problem.typeOutput
            },
            "exampleInputs": problem.inputs
          }
        ],
        "language": problem.language,
        "user":{
          "userId": 1
        }
      })
  })
    .then(response => {
        alert(response);
    })
    .catch(error => {
        console.error(error);
    });
 }

 const addUser = user => {
   fetch('http://165.227.48.161:8082/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         "userEmail": "prueba@prueba.cl",
         "userPassword": "password",
         "userType": 0
       })
   })
     .then(response => {
         alert(response);
     })
     .catch(error => {
         console.error(error);
     });
  }

class FormProblem extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      output: '',
      typeOutput: 'String',
      description: '',
      inputs: [{ inputValue: '', inputType: 'String' }],
      language: 'Python',
    };
  }

  getValidationState() {
    const length = this.state.title.length;
    if (length > 0) return 'success';
    else if  (length === 0) return 'error';
    return null;
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.inputs.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, [evt.target.name]: evt.target.value,  };
    });

    this.setState({ inputs: newShareholders });
  }

  handleShareholderTypeChange = (idx) => (evt) => {
    const newShareholders = this.state.inputs.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, [evt.target.name]: evt.target.value,  };
    });
    this.setState({ inputs: newShareholders });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, inputs } = this.state;
    alert(`Incorporated: ${title} with ${inputs.length} inputs`);
    addUser(this.state);
    addProblem(this.state);
    console.log(this.state);
  }

  handleAddShareholder = () => {
    this.setState({ inputs: this.state.inputs.concat([{ inputValue: '', inputType: 'String' }]) });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({ inputs: this.state.inputs.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    return (

      <div className="problem">
      <h1 className="problem-title">Añadir Problema</h1>


      <form className="problem-form" onSubmit={this.handleSubmit}>
      <Row className="show-grid">
        <Col xs={10} md={10}>
        <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Título del problema:</ControlLabel>
            <FormControl
              name = "title"
              type="text"
              value={this.state.title}
              placeholder="Escribe el titulo del problema..."
              onChange={e => this.Change(e)}
            />
            <FormControl.Feedback />
            <HelpBlock>Campo obligatorio.</HelpBlock>
          </FormGroup>
        </Col>
        <Col xs={10} md={2}>
          <ControlLabel>Lenguaje:</ControlLabel>
          <FormControl
          componentClass="select"
          placeholder="select"
          name="language"
          value={this.state.lenguage}
          onChange={e => this.Change(e)}>
            <option value="Python">Python</option>
            <option value="C">C</option>
            <option value="Java">Java</option>
          </FormControl>
        </Col>
      </Row>


        <Row className="row-btn-add">
          <Col xs={10} md={6}>
            <ControlLabel>Entradas del problema:</ControlLabel>
          </Col>
          <Col xs={10} md={4}>
            <ControlLabel>Tipo:</ControlLabel>
          </Col>
        </Row>


        {this.state.inputs.map((shareholder, idx) => (
          <div className="shareholder">
          <Row className="problem-row-inputs">
            <Col xs={6} md={6}>
            <FormControl
              name = "inputValue"
              type= "text"
              value={shareholder.name}
              placeholder={`Entrada #${idx + 1}`}
              onChange={this.handleShareholderNameChange(idx)}
            />
            <FormControl.Feedback />
            </Col>
            <Col xs={6} md={4}>
               <FormControl
               componentClass="select"
               placeholder="select"
               name="inputType"
               value={shareholder.type}
               onChange={this.handleShareholderTypeChange(idx)}>
                 <option value="String">String</option>
                 <option value="Integer">Entero</option>
               </FormControl>
            </Col>
            <Col xs={6} md={2}>
            </Col>
            <Col className="btn-delete" xsHidden md={2}>
            <Button className="btn-icon-delete"  onClick={this.handleRemoveShareholder(1)} ></Button>
            </Col>
          </Row>
          </div>
        ))}
        <br />
        <Row className="row-btn-add">
        <Col xs={10} md={10}>
        </Col>
        <Col className="col-btn-add" xs={10} md={1}>
          <Button className="btn-add" onClick={this.handleAddShareholder}></Button>
        </Col>
        </Row>
        <Row className="show-grid">
          <Col xs={6} md={6}>
          <ControlLabel>Salida del problema:</ControlLabel>
          </Col>
          <Col xs={6} md={6}>
          <ControlLabel>Tipo:</ControlLabel>
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} md={6}>
            <FormControl
              name ="output"
              type="text"
              value={this.state.output}
              placeholder="Escribe la salida del problema..."
              onChange={e => this.Change(e)}
            />
            <FormControl.Feedback />
            <HelpBlock>Campo obligatorio.</HelpBlock>
          </Col>
          <Col xs={6} md={4}>
              <FormControl
              componentClass="select"
              placeholder="select"
              name="typeOutput"
              value={this.state.typeOutput}
              onChange={e => this.Change(e)}>
                <option value="String">String</option>
                <option value="Integer">Entero</option>
              </FormControl>
          </Col>
        </Row>

        <br />
        <FormGroup
            controlId="formBasicText"
            validationState={this.getValidationState()}
          >
            <ControlLabel>Descripción del problema:</ControlLabel>
            <FormControl
              componentClass="textarea"
              name = "description"
              type="text"
              value={this.state.description}
              placeholder="Descripcion del problema..."
              onChange={e => this.Change(e)}
            />
            <FormControl.Feedback />
            <HelpBlock>Campo obligatorio.</HelpBlock>
          </FormGroup>
        <br />
        <Button type="submit">Guardar</Button>
      </form>
    </div>
    )
  }
}

export default FormProblem;
