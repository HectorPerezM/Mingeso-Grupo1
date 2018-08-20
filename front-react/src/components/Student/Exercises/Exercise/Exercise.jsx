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
            input: "",
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
            evaluacion: {
                variables: 10,
                erroresIdentacion: 10,
                codigoComentado: "Mal comentado",
                erroresFunciones: 20,
                bloquePrincipal: "TENIS LA PURA CAGA AWEONAO    "
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
        this.setState({ show: true });
        //alert("el algoritmo que será evaluado es: \n"+this.state.code.toString());
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
    
    componentWillMount() {
        // axios.get('http://165.227.48.161:8082/problems/'+this.props.match.params.id)
        //     .then(res => {
        //         const problem = res.data;
        //         console.log(problem);
        //         this.setState({
        //             problemTitle: problem.problemTitle,
        //             input: "",
        //             output: "",
        //             description: problem.problemStatement,
        //             language: problem.language,
        //             code: "",
        //             show: false
        //         });
        //     });

        this.setState({
            problemTitle: "titulo generico",
            description: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas 'Letraset', las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."
        });

        this.startTimer();
    };
    
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
                        <Col xs={8} xsPush={2}>
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
                                    
                                    <Button bsClass="btn-analizar">
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