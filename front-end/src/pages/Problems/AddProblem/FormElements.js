import React from 'react';
import { Field, reduxForm } from 'redux-form';
import renderField from 'components/FormInputs/renderField';

const FormElements = () => (

  <div className="card">
    <div className="header">
      <h4>Añadir un nuevo problema a la plataforma</h4>
    </div>
    <div className="content">
      <form className="form-horizontal">
        <div className="form-group">
          <label className="control-label col-md-3">Título del problema</label>
          <div className="col-md-9">
            <Field
              name="withHelp"
              type="text"
              component={renderField}
              helpText="Nombre del problema, ej: 'Palindromos'"  />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Enunciado</label>
          <div className="col-md-9">
            <Field
              name="disabled"
              type="text"
              placeholder=""
              disabled={false}
              component={renderField}
              helpText="Ingrese el enunciado del problema"  />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Entrada al problema</label>
          <div className="col-md-9">
            <Field
              name="placeholder"
              type="text"
              placeholder="input"
              component={renderField}
              helpText="Si posee mas de un parametro, deben estar separado por una coma, ej: '123,321,12'"  />
          </div>
        </div>

        <div className="form-group">
          <label className="control-label col-md-3">Salida del problema</label>
          <div className="col-md-9">
            <Field
              name="placeholder"
              type="text"
              placeholder="output"
              component={renderField}
              helpText="Salida esperada del programa desarrollado por el alumne"  />
          </div>
        </div>
        <button type="submit" className="btn btn-fill btn-info" >Añadir</button>
      </form>
    </div>
  </div>
);

export default reduxForm({
  form: 'formElements'
})(FormElements);
