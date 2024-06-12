import React from 'react';
import useForm from './useForm';

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

  const { values, handleChange, handleSubmit, errors } = useForm(initialState, validate);

  return (
      <form onSubmit={handleSubmit} className='formulario' >
        <div >
          <label className="form-label">Nome</label>
          <input type="text" className='form-control' name="name" value={values.name} onChange={handleChange} />
          {errors.name && <span>{errors.name}</span>}
        </div>
        <div>
          <label className="form-label">Email</label>

          <input type="email" className='form-control' name="email" value={values.
            email} onChange={handleChange} />
          {errors.email && <span>{errors.email}</span>}

        </div>
        <button className='btn btn-secondary' type="submit">Enviar</button>
      </form>

  );
};





export default Form1;
