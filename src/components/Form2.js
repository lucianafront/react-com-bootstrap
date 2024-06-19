import React from 'react';
import useForm from './useForm';
import { ArrowDownUp, Trash } from 'react-bootstrap-icons';




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

  const { values,resultados, handleChange, handleSubmit, handleOrder, handleDelete, errors } = useForm(initialState, validate);

  return (
   <>
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

{resultados.length > 0 && (
  <div>
    <h2>Resultados</h2>
    <table className='table'>
      <thead>
        <tr>
          <th>UserName <button className='btn' onClick={() => handleOrder('username')}><ArrowDownUp className='' /></button></th>
          <th>Password<button className='btn' onClick={() => handleOrder('password')}><ArrowDownUp /></button></th>
        </tr>
      </thead>
      <tbody>
        {resultados.map((item, index) => (
          <tr key={index}>
            <td>{item.username}</td>
            <td>{item.password}</td>
            <td><button className='btn btn-danger' onClick={() => handleDelete(index)}><Trash/></button></td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
)}
</>
  
  );
};



export default Form2;
