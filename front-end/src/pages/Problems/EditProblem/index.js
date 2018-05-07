import React from 'react';
import StackedForm from './StackedForm';

const AddProblem = () => (
  <div>
    <div className="row">
      <StackedForm onSubmit={values => alert('Enter values: ' + JSON.stringify(values, null, 2))} />
    </div>
  </div>
);

export default AddProblem;
