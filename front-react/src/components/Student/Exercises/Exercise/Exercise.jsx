import React, {Component} from 'react';
import Analisis from '../../Analisis/Analisis';
import axios from 'axios';
import AceEditor from 'react-ace';
import ReactLoading from 'react-loading';
import {Redirect, Link} from 'react-router-dom';
import { Row, Col, Popover, Tooltip, FormControl, Modal, Button, ButtonToolbar} from 'react-bootstrap';

import 'brace/mode/java';
import 'brace/theme/monokai';
import './Exercise.css';

class Exercise extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.volver = this.volver.bind(this);

        this.startTimer = this.startTimer.bind(this)
        this.setLanguageIcon = this.setLanguageIcon.bind(this)

        this.state = {
            problemTitle: "",
            input: [],
            output: "",
            description: "",
            language: "",
            code: "",
            show: false,
            disabled: true,
            time: 0,
            isTimerOn: false,
            timeStart: 0,
            isEvaluated: true   ,
            languageIcon: 'fab fa-python',
            languageEditor: 'python',
            statusComplete: 0,
            evaluacion: {
                variables: 10,
                erroresIdentacion: 10,
                codigoComentado: "Mal comentado",
                erroresFunciones: 20,
                bloquePrincipal: "..."
            }
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

    handleSubmit = (e) => {
      // evt.preventDefault();
      // this.setState({ show: true });
      // this.setState({
      //     disabled: true
      // })
      // console.log("codigo1");
      // console.log(this.state);


          e.preventDefault();
          this.setState({
            show: true,
            disabled: true
          });


          fetch('http://localhost:8082/solutions', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              "solutionCode": this.state.code.toString(),
              "language": this.state.language.toLowerCase(),
              "userProblem":{
                "user":{
                  "userId": 1
                },
                "problem":{
                  "problemId": this.props.match.params.id
                },
                "statusComplete": 0
              }
            })
          })
          .then(response => {
            console.log("********");
            // var a = response.json();\
            // sleep(1000);
            console.log(this.state.language);
            console.log(response);


            // this.setState({
            //    spinLoading:
            //  });


            // console.log(response.json());

            // console.log(response.json().PromiseValue );
            // console.log(response.json().PromiseValue() );



            response.json().then(function(result) {
              console.log(result);
              if (typeof result !== "undefined") {
                var estado =result.userProblem.statusComplete;
                var estadoStr ="";

                if (estado == 1) {
                  estadoStr = "Completado"
                }else {
                  estadoStr = "Incorrecto"
                }
                if (result.theSolution !== "\"/usr/lib/gcc/x86_64-linux-gnu/5.4.0/../../../x86_64-linux-gnu/crt1.o") {
                  alert("Ejecución exitosa.\nResultado obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.
                  if (result.userProblem.feedback!= null) {
                    alert(result.userProblem.feedback)
                  }
                }else {
                  alert("Ejecución Fallida.\nError obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.

                }
                 // alert("Ejecución exitosa.\nResultado obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.
                 // if (result.userProblem.feedback!= null) {
                 //   alert(result.userProblem.feedback)
                 // }
              }else {
                alert("Fallo en la compilación vuelve a intentarlo.\nEstado problema: Incompleto") //will log results.
                // alert("Feedback n")
              }


            })

            // console.log(response.json().promise_value );
            console.log("********");
            // alert(response.JSON);
          })
          .catch(error => {
            console.error(error);
          });




          alert("el algoritmo que será evaluado es: \n"+this.state.code.toString());

    }


    componentWillMount() {
         axios.get('http://localhost:8082/problems/'+this.props.match.params.id)
             .then(res => {
                 const problem = res.data;
                 console.log(problem);
                 this.setState({
                     problemTitle: problem.problemTitle,
                     output: problem.problemExamples[0].result.resultValue,
                     input: problem.problemExamples[0].exampleInputs,
                     description: problem.problemStatement,
                     code: "",
                     show: false
                 });
                 console.log(this.state.input);

             });
        this.startTimer();
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

    Change = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
        this.setLanguageIcon(e.target.value);
    };

    onSubmit = e => {
        e.preventDefault();
        this.setState({
          show: true
        });


        fetch('http://localhost:8082/solutions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "solutionCode": this.state.code.toString(),
            "language": this.state.language.toLowerCase(),
            "userProblem":{
              "user":{
                "userId": 1
              },
              "problem":{
                "problemId": this.props.match.params.id
              },
              "statusComplete": 0
            }
          })
        })
        .then(response => {
          console.log("********");
          // var a = response.json();\
          // sleep(1000);
          console.log(this.state.language);
          console.log(response);
          // console.log(response.json());

          // console.log(response.json().PromiseValue );
          // console.log(response.json().PromiseValue() );



          response.json().then(function(result) {
            console.log("este es el resultado");
            console.log(result);
            if (typeof result !== "undefined") {
              var estado =result.userProblem.statusComplete;
              var estadoStr ="";

              if (estado == 1) {
                estadoStr = "Completado"
              }else {
                estadoStr = "Incorrecto"
              }
              if (result.theSolution !== "\"/usr/lib/gcc/x86_64-linux-gnu/5.4.0/../../../x86_64-linux-gnu/crt1.o") {
                alert("Ejecución exitosa.\nResultado obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.
                if (result.userProblem.feedback!= null) {
                  alert(result.userProblem.feedback)
                }
              }else {
                alert("Ejecución Fallida.\nError obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.

              }
               // alert("Ejecución exitosa.\nResultado obtenido:"+result.theSolution+"\nEstado problema: "+estadoStr) //will log results.
               // if (result.userProblem.feedback!= null) {
               //   alert(result.userProblem.feedback)
               // }
            }else {
              alert("Fallo en la compilación vuelve a intentarlo.\nEstado problema: Incompleto") //will log results.
              // alert("Feedback n")
            }


          })

          // console.log(response.json().promise_value );
          console.log("********");
          // alert(response.JSON);
        })
        .catch(error => {
          console.error(error);
        });




        alert("el algoritmo que será evaluado es: \n"+this.state.code.toString());
      };


    volver(){
        // console.log(this.state.time);
        <Redirect to="/exercises" />
    }

    startTimer() {
        this.setState({
            isOn: true,
            time: this.state.time,
            start: Date.now() - this.state.time
        })

        this.timer = setInterval(() => this.setState({
            time: Date.now() - this.state.start
        }), 500);
    }

    setLanguageIcon(value){
        console.log("setlang: " + this.state.language)
        if(value === "java"){
            this.setState({languageIcon: "fab fa-java"})
        } else if(value === "python") {
            this.setState({languageIcon: "fab fa-python"})
        } else {
            this.setState({languageIcon: "fab fa-cuttlefish"})
        }
    }


    render(){
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

        const listItems = this.state.input.map((asd,i) => (
          <a>{asd.inputValue}</a>
        ));

        return (
            <div className="student-form">
                <div className="form-student-title">
                    <Row>
                        <Col xs={12}>
                            <Link to="/exercises">
                                <div className="problem-title-icon">
                                    <i class="fas fa-angle-double-left"></i>
                                </div>
                            </Link>
                            <div className="problem-title">
                                <h1>{this.state.problemTitle}</h1>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className="form-student">
                    <Row className="form-student-row-description">
                        <Col xs={12} md={12}>
                            <h3 className="form-student-problem-description">
                                <small>
                                    {this.state.description}
                                </small>
                            </h3>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={1}>
                            <div className="form-lang">
                                <i className={this.state.languageIcon}></i>
                            </div>
                        </Col>
                        <Col xs={2}>
                            <div className="form-student-select-lang">
                                <FormControl
                                    componentClass="select"
                                    placeholder="select"
                                    name="language"
                                    value={this.state.language}
                                    onChange={e => this.Change(e)}
                                    >
                                    <option value="python">Python</option>
                                    <option value="c">C</option>
                                    <option value="java">Java</option>
                                </FormControl>
                            </div>
                        </Col>
                        <Col className="example" xs={3} xsPush={1}>
                          <h3>Entradas:</h3>
                            {this.state.input.map((asd,i) => (
                              <h4 className="parrafo"> {i+1}) {asd.inputValue}</h4>
                            ))}
                        </Col>
                        <Col className="example" xs={3} xsPush={1}>
                        <h3>Salida:</h3>
                          <h4 className="parrafo">{1}) {this.state.output}</h4>
                        </Col>
                        <Col xs={3}>
                            <div className="form-student-timer">
                                <h3><i className="fas fa-clock"></i> {Math.trunc(this.state.time /60000)} min. y {(Math.trunc(this.state.time /1000) % 60)} seg.</h3>
                            </div>
                        </Col>
                    </Row>
                    <form>
                        <br />
                        <div className="form-student-monaco">
                            <Row>
                                <Col xs={12} md={8}>
                                    <AceEditor
                                        mode={this.state.language}
                                        theme="monokai"
                                        name="ace-editor"
                                        width="100%"
                                        height="530px"
                                        fontSize={14}
                                        showPrintMargin={true}
                                        showGutter={true}
                                        highlightActiveLine={true}
                                        value={code}
                                        onChange={this.onChange}
                                    />

                                    <Button bsClass="btn-analizar" onClick={e => this.handleSubmit(e)}>
                                        <i className="fab fa-telegram-plane"></i> Enviar
                                    </Button>
                                </Col>

                                <Col xs={12} md={4}>
                                    <Row>
                                        <Col md={12}>
                                            <Analisis evaluated={this.state.isEvaluated} evaluacion={this.state.evaluacion}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={0} md={8}>
                                </Col>
                                <Col  className="form-student-modal" xs={12} md={2}>
                                    <Row>
                                        <Col xs={12} md={4}>
                                            <div>
                                                <Modal id="modal" show={this.state.show} onHide={this.handleClose}>
                                                    <ReactLoading className="spinLoading" className="spinLoading" height={375} width={200} type="spin" color="#aaa" />
                                                </Modal>
                                            </div>
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Exercise;
