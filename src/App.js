import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  //Регистрируем хук useForm, с его методами

  const {
    register,
    formState: {
      errors,
    },
    handleSubmit
  } = useForm()

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
  }

  return (
      <div className='App'>
        <h1 style={{marginBottom: '15px', marginTop: '30px'}}>React Hook Form</h1>
        <hr/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name
            <input
              {...register('firstName')}
            />
          </label>
          <input type='submit' />
        </form>
      </div>
  )
}

export default App;
