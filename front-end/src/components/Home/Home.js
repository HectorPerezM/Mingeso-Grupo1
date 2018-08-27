import React from 'react';
import ChartistGraph from "react-chartist";
import ReactSvgPieChart from "react-svg-piechart";
import {Row, Col} from "react-bootstrap";
import { Chart } from 'react-google-charts';
import {Card} from '../Card/Card.jsx';
import Dashboard from '../Dashboard/Dashboard.js';


const Home = () => {




    return(
      <div>
      <h2 className="problem-title">Dashboard</h2>
      <Row className="show-grid">
        <Col className="col-pieChart2" xs={12} md={12}>
        <div id="chartPreference2s" className="piasdeChart">
          <Dashboard {...this.props}/>
        </div>
        </Col>
      </Row>
      </div>
    );
};


export default Home;
