import { useForm } from 'react-hook-form';
import './App.css';

function App() {

  //Регистрируем хук useForm, с его методами

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
  } = useForm({
      mode: 'onBlur'
  })

  const onSubmit = (data) => {
    alert(JSON.stringify(data))
    reset()
  }

  return (
      <div className='App'>
        <h1 style={{marginBottom: '15px', marginTop: '30px'}}>React Hook Form</h1>
        <hr/>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label>
            First Name: 
            <input
              {...register('firstName', {
                required: "Поле обязательно для заполнения!",
                minLength: {
                  value: 5,
                  message: 'Минимальная длина 5 символов',
                }
              })}
            />
          </label>
          <div style={{height: '40px'}}>
              {errors?.firstName && <p>{errors?.firstName?.message || "Error"}</p>}
          </div>

          <label>
            Last Name: 
            <input
              {...register('lastName', {
                required: "Поле обязательно для заполнения!",
                minLength: {
                  value: 5,
                  message: 'Минимальная длина 5 символов',
                }
              })}
            />
          </label>
          <div style={{height: '40px'}}>
              {errors?.lastName && <p>{errors?.lastName?.message || "Error"}</p>}
          </div>


          <input disabled={!isValid} type='submit'/>
        </form>
      </div>
  )
}

export default App;
