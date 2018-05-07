import React from 'react';
import { Route } from 'react-router-dom';
import AddProblem from './AddProblem';
import ProblemTable from './ProblemTable';

const Problems = ({match}) => (
  <div className="content">
    <div className="container-fluid">
      <Route path={`${match.url}/add-problem`} component={AddProblem} />
      <Route path={`${match.url}/problem-table`} component={ProblemTable} />
    </div>
  </div>
);

export default Problems;
