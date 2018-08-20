import React, {Component} from 'react';
import Analisis from '../../Analisis/Analisis';
import axios from 'axios';
import AceEditor from 'react-ace';
import ReactLoading from 'react-loading';
import {Redirect} from 'react-router-dom';
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
        this.setState({ show: true });
        //alert("el algoritmo que será evaluado es: \n"+this.state.code.toString());
    };

    volver(){
        <Redirect to="/exercises" />
    }
    
    
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
                        <Col xs={2}>
                            <div className="form-student-btn">
                                <Button onClick={this.volver}>Volver</Button>                    
                            </div>
                        </Col>
                        <Col xs={10}>
                            <div className="form-student-timer">
                                <h2>Llevas 1hr 10min</h2>
                            </div>
                        </Col>
                    </Row>
                </div>
                
                

                <div className="form-student">
                    <Row className="form-student-row-problem">
                        <Col xs={12} md={12}>
                            <h3 className="form-student-problem-title">Título: </h3>
                        </Col>
                    </Row>
                    
                    <Row className="form-student-row-description">
                        <Col xs={12} md={12}>
                            <h3 className="form-student-problem-description">Descripción: <small>
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                        
                                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.
                        
                                Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                        
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
                            </small></h3>
                            <br/>
                        </Col>
                    </Row>
                    
                    <br/>
                    <Row className="form-student-problem-row-language">
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
                            <Row>
                                <Col xs={12} md={8}>
                                    <AceEditor
                                        mode="java"
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
                                </Col>
                                
                                <Col xs={12} md={4}>
                                    <Row>
                                        <Col md={12}>
                                            <Analisis {...this.props}/>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col md={12}>
                                            <ButtonToolbar className="button-toolbar">
                                                <Button  onClick={e => this.onSubmit(e)} bsStyle="success">Evaluar</Button>
                                            </ButtonToolbar>
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