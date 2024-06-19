import { useState } from 'react';

const useForm = (initialState, validate) => {
  const [resultados, setResultados] = useState([]);
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    });
  };

  const addvalores = () => {
    if(values.name !== '' && values.email !== ''){
      setResultados(resultados => [...resultados, values]);
      resetForm();
    }

  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validate(values));
    setIsSubmitting(true);
    addvalores();
    
  };

  const resetForm = () => {
    setValues(initialState);
    setErrors({});
    setIsSubmitting(false);
  };

  const handleOrder = (key) => {
    var sortedResults = resultados.sort((a, b) => {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });

    setResultados([...sortedResults]);
  }


  const handleDelete = (index) => {
    const newResultados = [...resultados];
    newResultados.splice(index, 1);
    setResultados(newResultados);
  } 



  return {
    values,
    resultados,
    addvalores,
    handleChange,
    handleSubmit,
    handleOrder,
    handleDelete,
    errors,
    isSubmitting,
    resetForm
  };
};

export default useForm;
