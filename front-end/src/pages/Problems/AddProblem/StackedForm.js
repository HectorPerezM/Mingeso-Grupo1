import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const validate = values => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Email is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }
  if (!values.enunciado) {
    errors.enunciado = 'Ingrese un enunciado';
  }
  if (!values.titulo) {
    errors.titulo = 'Ingrese un titulo';
  }
  if (!values.entrada) {
    errors.entrada = 'Ingrese una entrada';
  }
  if (!values.salida) {
    errors.salida = 'Ingrese un titulo';
  }
  return errors;
};

const StackedForm = ({
  submitting,
  handleSubmit,
  submitForm
}) => (
  <div className="card">
    <div className="header">
      <h4>Añadir un problema</h4>
    </div>
    <div className="content">
      <form onSubmit={handleSubmit}>

        <div className="form-group">
          <label className="control-label">Titulo del problema</label>
            <Field
              name="titulo"
              type="text"
              placeholder=""
              component={renderField}
              helpText="Ingrese un titulo del problema"  />
        </div>

        <div className="form-group">
          <label className="control-label">Enunciado</label>
            <Field
              name="enunciado"
              type="text"
              placeholder=""
              component={renderField}
              helpText="Ingrese el enunciado del problema"  />
        </div>

        <div className="form-group">
          <label className="control-label">Entrada del problema</label>
            <Field
              name="entrada"
              type="text"
              placeholder=""
              component={renderField}
              helpText="Si posee mas de un parametro, deben estar separado por una coma, ej: '123,321,12'"  />
        </div>

        <div className="form-group">
          <label className="control-label">Salida del problema</label>
            <Field
              name="salida"
              type="text"
              placeholder=""
              component={renderField}
              helpText="Salida esperada del programa desarrollado por el alumne"  />
        </div>

        <button type="submit" className="btn btn-fill btn-info" disabled={submitting}>Submit</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'stackedForm',
  validate
})(StackedForm)
