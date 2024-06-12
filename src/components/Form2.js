import React from 'react';
import useForm from './useForm';



const Form2 = () => {
  const initialState = {
    username: '',
    password: ''
  };

  const validate = (values) => {
    let errors = {};
    if (!values.username) {
      errors.username = 'O nome de usuário é obrigatório';
    }
    if (!values.password) {
      errors.password = 'A senha é obrigatória';
    }
    return errors;
  };

  const { values, handleChange, handleSubmit, errors } = useForm(initialState, validate);

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="username" value={values.username} onChange={handleChange} />
      {errors.username && <span>{errors.username}</span>}
      <input type="password" name="password" value={values.password} onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
      <button type="submit">Enviar</button>
    </form>
  );
};



export default Form2;
