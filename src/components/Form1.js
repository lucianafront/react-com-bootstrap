import React from 'react';
import useForm from './useForm';
import { ArrowDownUp } from 'react-bootstrap-icons';

const Form1 = () => {

  const initialState = {
    name: '',
    email: ''
  };


  const validate = (values) => {
    let errors = {};
    if (!values.name) {
      errors.name = 'O nome é obrigatório';
    }
    if (!values.email) {
      errors.email = 'O email é obrigatório';
    }
    return errors;
  };

  const { values, resultados, handleChange, handleSubmit, handleOrder, handleDelete, errors } = useForm(initialState, validate);

  return (
    <>
      <form onSubmit={handleSubmit} className='formulario'>
        <div>
          <label className="form-label">Nome</label>
          <input type="text" className='form-control' name="name" value={values.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label className="form-label">Email</label>
          <input type="email" className='form-control' name="email" value={values.email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}
        </div>
        <button className='btn btn-secondary' type="submit">Enviar</button>
      </form>

      {resultados.length > 0 && (
        <div>
          <h2>Resultados</h2>
          <table className='table'>
            <thead>
              <tr>
                <th>Nome <button className='btn' onClick={() => handleOrder('name')}><ArrowDownUp className='' /></button></th>
                <th>Email<button className='btn' onClick={() => handleOrder('email')}><ArrowDownUp /></button></th>
              </tr>
            </thead>
            <tbody>
              {resultados.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td><button className='btn btn-danger' onClick={() => handleDelete(index)}>Deletar</button></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Form1;
