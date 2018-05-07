import React, { Component } from 'react';
import { BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import * as productActions from '../productActions';
import axios from 'axios';


class ProblemTable extends Component {

  state = {
    problems: []
  };

    componentDidMount() {
      axios.get('http://www.mocky.io/v2/59b994573a0000f501f7fb05')
        .then(res => {
          const problems = res.data;
          this.setState({ problems });
        })
    }


  render() {
    const { problems } = this.state;
    const options = {
      sizePerPage: 9,
      prePage: 'Previous',
      nextPage: 'Next',
      firstPage: 'First',
      lastPage: 'Last',
      hideSizePerPage: false,
    };

    return (

      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="header">
                <h4>Lista de Problemas</h4>
              </div>
              <div className="content">
                <BootstrapTable
                  data={problems}
                  bordered={false}
                  striped
                  pagination={true}
                  options={options}>

                  <TableHeaderColumn
                    dataField='id'
                    isKey
                    width="50px"
                    dataSort>
                    ID
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField='firstname'
                    width="15%"
                    filter={ { type: 'TextFilter'} }
                    dataSort>
                    Nombre del problema
                  </TableHeaderColumn>

                  <TableHeaderColumn
                    dataField='description'
                    width="30%">
                    Descripción
                  </TableHeaderColumn>



                </BootstrapTable>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}
export default ProblemTable
