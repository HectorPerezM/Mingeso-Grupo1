import React, { Component } from "react";

class dynamicInput extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      output: '',
      description: '',
      inputs: [{ input: '', type: 'str' }],
    };
  }

  validate = (inputs) => {
    if (!inputs.title) {
      alert('falta el titulo');
    }
    if (!inputs.output) {
      alert('falta la salida');
    }
    if(!inputs.description){
      alert('falta la descripcion');
    }
    alert(inputs.inputs.lenght);
  }

  Change = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleShareholderNameChange = (idx) => (evt) => {
    const newShareholders = this.state.inputs.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, [evt.target.name]: evt.target.value,  };
    });

    this.setState({ inputs: newShareholders });
  }

  handleShareholderTypeChange = (idx) => (evt) => {
    const newShareholders = this.state.inputs.map((shareholder, sidx) => {
      if (idx !== sidx) return shareholder;
      return { ...shareholder, [evt.target.name]: evt.target.value,  };
    });
    this.setState({ inputs: newShareholders });
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const { title, inputs } = this.state;
    alert(`Incorporated: ${title} with ${inputs.length} inputs`);
    console.log(this.state);
  }

  handleAddShareholder = () => {
    this.setState({ inputs: this.state.inputs.concat([{ input: '', type: 'str' }]) });
  }

  handleRemoveShareholder = (idx) => () => {
    this.setState({ inputs: this.state.inputs.filter((s, sidx) => idx !== sidx) });
  }

  render() {
    return (

      <div className="formStudent">
      <h1 className="title">Suma de cuadrados</h1>
      <h3 className="subtitle">El id del problema es: {this.props.match.params.id}</h3>
      <h5 className="description">description cualquier cosa cualquierdescription cualquier cosadescription
      cualquier cosa cualquier cualquierdescription cualquier cosa cualquierdescription cualquier cosa
      cualquierdescription cualquier cosa cualquierdescription cualquier cosa cualquierdescription
      cualquier cosa cualquier
      </h5>

      <form onSubmit={this.handleSubmit}>
      <label>
        Titulo:
        <input
          name="title"
          type="text"
          placeholder="Titulo del problema"
          value={this.state.title}
          onChange={e => this.Change(e)}
        />
      </label>
        <h5>Entradas:</h5>

        {this.state.inputs.map((shareholder, idx) => (
          <div className="shareholder">
            <input
              name="input"
              type="text"
              placeholder={`Entrada #${idx + 1}`}
              value={shareholder.name}
              onChange={this.handleShareholderNameChange(idx)}
            />

            <label>
             Tipo
             <select name="type"
             value={shareholder.type}
             onChange={this.handleShareholderTypeChange(idx)}>
               <option value="str">String</option>
               <option value="int">Entero</option>
             </select>
           </label>

            <button type="button" onClick={this.handleRemoveShareholder(idx)} className="small">Borrar</button>

          </div>
        ))}
        <button type="button" onClick={this.handleAddShareholder} className="small">Nueva entrada</button>
        <br />
        <label>
        Salida:
        <input
          name="output"
          type="text"
          placeholder="Salida del problema"
          value={this.state.output}
          onChange={e => this.Change(e)}
        />
        </label>
        <br />
        <label>
          Descripción:
          <textarea name="description"
          placeholder="Descripción del problema"
          value={this.state.description}
          onChange={e => this.Change(e)} />
        </label>
        <br />
        <button>Añadir problema</button>
      </form>
    </div>
    )
  }
}

export default dynamicInput;
