import React, {Component} from 'react';
import {Redirect, Switch, Route} from 'react-router-dom';
import {Grid, Row, Col} from 'react-bootstrap';
import Sidebar from '../../layout/Sidebar';
import Content from '../Content/Content';

import './Dashboard.css';

class Dashboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: '',
            typePerson: -1,
            redirect: false
        }
    }

    componentWillMount(){
        let userEmail = sessionStorage.getItem('userEmail');
        let userType = sessionStorage.getItem('userType');

        console.log("user email: " + userEmail + "| type: " + parseInt(userType, 10));

        if(userEmail !== null){
            this.setState({
                email: userEmail,
                typePerson: parseInt(userType, 10),
                redirect: false
            });


        } else {
            this.setState({ redirect: true });
        }
    }

    logout = () => {
        sessionStorage.setItem('userEmail', '');
        sessionStorage.setItem('userType', '');
        sessionStorage.clear();

        this.setState({redirect: true});
    }

    render(){
        if(this.state.redirect){
            return <Redirect to={"/login"} />
        }

        console.log("dashboard: email: " + this.state.email+ " | typePerson: " + this.state.typePerson);

        return(
            // <div className="dashboard">
            <Grid fluid bsClass="dashboard">
                <Row bsClass="dashboard-row">
                    <Col xs={2}>
                        <Sidebar />
                    </Col>
                    <Col xs={10}>
                        <Content />
                    </Col>
                </Row>
            </Grid>
                // <div className="dashboard-content">
                // </div>
            // </div>
        );
    }

}

export default Dashboard;
