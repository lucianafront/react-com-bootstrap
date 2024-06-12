import './App.css';
import Form1 from './components/Form1';
import Form2 from './components/Form2';


const App = () => {
  return (
    <>

      <div className='row'>
        <h1>Formulário 1</h1>
        <Form1 />

      </div>

      <div className='row'>

        <h1>Formulário 2</h1>
        <Form2 />
      </div>  
      </>
  );
};

export default App;
