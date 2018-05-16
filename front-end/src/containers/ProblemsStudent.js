import React, { Component } from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

class ProblemsStudent extends Component {

    state = {
      problems: []
    };

      componentDidMount() {
        axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
          .then(res => {
            const problems = res.data;
            this.setState({problems});
          })
      }
  render() {
    const { data } = this.state.problems;
  return (
    <div className="card">
      <div className="header text-center">
        <h4 className="title">Problemas a resolver</h4>
        <p className="category">Tabla que contiene todos los problemas</p>
        <br />
      </div>
      <div className="content table-responsive table-full-width">
        <table className="table table-bigboy">
          <thead>
            <tr>
              <th className= "number">ID</th>
              <th className="th-description">Descripción</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.state.problems.map(item => (
              <tr>

                <td className="td-name">
                  {item.id}
                </td>
                <td>
                  {item.firstname}
                </td>
                <td className="td-actions">
                <NavLink className="btn btn-primary btn-sm"
                                         to={'/edit/' + item.id}>Resolver Problema</NavLink>
                </td>
              </tr>
            ))}


          </tbody>
        </table>
      </div>
    </div>
    );
  }
  }
  export default ProblemsStudent;
