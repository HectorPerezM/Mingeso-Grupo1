import React, { Component } from "react";
import axios from 'axios';
import {FormControl,ButtonToolbar,Row,Col,Button,Popover,Tooltip,Modal,OverlayTrigger} from "react-bootstrap";
import MonacoEditor from 'react-monaco-editor';

class Form extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      problemName: "",
      input: "",
      output: "",
      description: "",
      language: "",
      code: "",
      show: false,
      disabled: true
    };
  }



  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    this.setState({
      disabled: true
    });
  }

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

  Change = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  onSubmit = e => {
    e.preventDefault();
    this.setState({
      disabled: false
    });
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
          code: "",
          show: false
        });
      })
  };

  render() {
    const popover = (
      <Popover id="modal-popover" title="popover">
        very popover. such engagement
      </Popover>
    );
    const tooltip = <Tooltip id="modal-tooltip">wow.</Tooltip>;
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
      <Row>
        <Col xs={0} md={1}>
        </Col>
        <Col className="form-student-title-col" xs={12} md={10}>
          <h2 className="form-student-title"><small>Resolver problema</small></h2>
        </Col>
        <Col xs={0} md={1}>
        </Col>
      </Row>
      <Row className="form-student-row-problem">
        <Col xs={12} md={12}>
        <h4 className="form-student-problem-title">Problema: <small>Leer el problema en latín.</small></h4>
        </Col>
      </Row>
      <Row className="form-student-row-description">
        <Col xs={12} md={12}>
        <h4 className="form-student-problem-description">Descripción: <small>
        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.

        Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.

        Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.

        Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
        </small></h4>
        </Col>
      </Row>
      <Row className="form-student-problem-row-language">
        <Col xs={0} md={7}>
        </Col>
        <Col xs={2} md={1}>
          <h4 className="form-student-problem-language">Lenguaje:</h4>
        </Col>
        <Col xs={4} md={2}>
            <FormControl
            componentClass="select"
            placeholder="select"
            name="language"
            value={this.state.language}
            onChange={e => this.Change(e)}>
              <option value="Python">Python</option>
              <option value="C">C</option>
              <option value="Java">Java</option>
            </FormControl>
        </Col>
      </Row>
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
          <Row>
            <Col xs={0} md={8}>
            </Col>
            <Col  className="form-student-modal" xs={12} md={2}>
            <Row>
              <Col xs={12} md={4}>
              <div>
                <Button disabled={this.state.disabled} bsStyle="primary"  onClick={this.handleShow}>
                  Analisis
                </Button>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Análisis de buenas practicas de programación.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <h5>Variables.</h5>
                      <p>
                      <small>
                        - Tienes 3 variables sin nombres representativos.
                      </small>
                      </p>
                      <hr />

                      <h5>Identación y comentarios.</h5>
                      <p>
                      <small>
                        - Tienes 3 errores de identación.
                      </small>
                      </p>
                      <p>
                      <small>
                        - Código comentado correctamente.
                      </small>
                      </p>
                      <hr />

                      <h5>Funciones y procedimientos.</h5>
                      <p>
                      <small>
                      - Tienes 4 funciones y/o procedimientos con comentarios incompletos.
                      </small>
                      </p>

                      <hr />

                      <h5>Bloque principal.</h5>
                      <p>
                      <small>
                        - El bloque principal no esta estructurado correctamente.
                      </small>
                      </p>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
              </div>
              </Col>

            </Row>
            </Col>
            <Col className="form-student-solve" xs={12} md={2}>
            <ButtonToolbar>
              <Button  onClick={e => this.onSubmit(e)} bsStyle="success">Evaluar</Button>
            </ButtonToolbar>
            </Col>
          </Row>
          </div>


        </form>
      </div>
    );
  }
}

export default Form;
