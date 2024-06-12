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
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={values.name} onChange={handleChange} />
      {errors.name && <span>{errors.name}</span>}
      <input type="email" name="email" value={values.email} onChange={handleChange} />
      {errors.email && <span>{errors.email}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
};





export default Form1;
