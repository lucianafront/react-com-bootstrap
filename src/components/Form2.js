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
      <div>
         <label className="form-label">Nome</label>
      <input type="text" className="form-control" name='username' value={values.username} onChange={handleChange} />
      {errors.username && <span>{errors.username}</span>}
      </div>
      <div>
      <label className="form-label">Senha</label>
         <input type="password" className='form-control' name="password" value={values.password} onChange={handleChange} />
      {errors.password && <span>{errors.password}</span>}
      </div>
     
      <button className='btn btn-secondary' type="submit">Enviar</button>
    </form>
  
  );
};



export default Form2;
