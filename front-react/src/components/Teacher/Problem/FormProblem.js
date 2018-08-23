import React, { Component } from "react";
import {Row, Col} from "react-bootstrap";
import {FormGroup, FormControl, HelpBlock} from "react-bootstrap";
import {Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import './Css/FormProblem.css';


const examples = problem => {
  const newInputs = problem.inputs.map((input, i) => {
    return {'inputType': input.inputType, 'inputValue': input.inputValue}
  });
  return newInputs;
}

const addProblem = problem => {
  const inputs = examples(problem);
  console.log(inputs);
  fetch('http://206.189.181.197:8082/problems', {
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
              "resultType": problem.typeOutput,
              "resultValue": problem.output
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
    // .then(response => {
    //     alert(response);
    // })
    .catch(error => {
        console.error(error);
    });
 }

 const addUserA = user => {
   fetch('http://206.189.181.197:8082/users', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({
         "userEmail": "alumno@usach.cl",
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

  const addUserP = user => {
    fetch('http://206.189.181.197:8082/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          "userEmail": "profesor@usach.cl",
          "userPassword": "password",
          "userType": 1
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
    // alert(`Incorporated: ${title} with ${inputs.length} inputs`);
    //addUserA(this.state);
    //addUserP(this.state);
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

      <div className="container">
      <h2 className="title">Añadir problema</h2>
      <form className="body" onSubmit={this.handleSubmit}>
        <div className="card">
            <h3 className="card-title">Formulario</h3>
              <div className="card-body">
                <Row className="show-grid">
                <Col xs={12} md={12}>
                  <h4>Titulo del problema</h4>
                </Col>
                  <Col xs={12} md={12}>
                  <FormGroup
                      controlId="formBasicText"
                      validationState={this.getValidationState()}
                    >
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
                </Row>
                <Row className="row-btn-add">
                  <Col xs={8} md={8}>
                    <h4>Entradas del problema</h4>
                  </Col>
                </Row>
                <Row className="problem-inputs">
                  <Col xs={12} md={12}>
                    {this.state.inputs.map((shareholder, idx) => (
                      <div className="shareholder">
                      <Row className="problem-row-inputs">
                        <Col xs={9} md={8}>
                        <FormGroup
                            controlId="formBasicText"
                            validationState={this.getValidationState()}
                          >
                          <FormControl
                            name = "inputValue"
                            type= "text"
                            value={shareholder.name}
                            placeholder={`Entrada #${idx + 1}`}
                            onChange={this.handleShareholderNameChange(idx)}
                          />
                          <FormControl.Feedback />
                          <HelpBlock>Campo obligatorio.</HelpBlock>
                        </FormGroup>
                        </Col>
                        <Col xs={2} md={2}>
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
                        {idx === 0 ? <Col xs={2} md={2}>
                                  <Button className="btn-add" color="primary" onClick={this.handleAddShareholder}><span>Agregar</span></Button>
                                  <Button className="btn-del" color="secondary" onClick={this.handleRemoveShareholder(1)}>  Eliminar</Button>
                                  </Col> : null}
                      </Row>
                      </div>
                    ))}
                  </Col>
                </Row>

                <br />
                <Row className="show-grid">
                  <Col xs={8} md={8}>
                  <h4>Salida del problema</h4>
                  </Col>
                </Row>

                <Row className="show-grid2adas">
                  <Col xs={8} md={8}>
                  <FormGroup
                      controlId="formBasicText"
                      validationState={this.getValidationState()}
                    >
                      <FormControl
                        name ="output"
                        type="text"
                        value={this.state.output}
                        placeholder="Escribe la salida del problema..."
                        onChange={e => this.Change(e)}
                      />
                      <FormControl.Feedback />
                      <HelpBlock>Campo obligatorio.</HelpBlock>
                    </FormGroup>
                  </Col>
                  <Col xs={2} md={2}>
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
          <Row>
          <Col xs={12} md={12}>
            <h4>Descripcion del problema</h4>
          </Col>
          <Col xs={12} md={12}>
          <FormGroup
              controlId="formBasicText"
              validationState={this.getValidationState()}
            >
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
            </Col>
          <br />
          <Link to="/problems">
            <Button className="btn" onClick={e => this.handleSubmit(e)} variant="contained" color="seconday">
              <Icon>send</Icon>
              Enviar
            </Button>
          </Link>
          </Row>
          </div>
        </div>
      </form>
    </div>

    )
  }
}

export default FormProblem;
