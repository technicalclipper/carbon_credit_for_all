import React,{useState} from 'react';
import ReactDOM from 'react-dom'

function Signup(){
    const [inputs, setInputs] = useState({});
    const handleChange = (event) => {
      const name = event.target.name;
      const value = event.target.value;
      setInputs(values => ({...values, [name]: value}))
      {console.log(name)}
    }
    return(
      <div className="register">
          <h1 >sign up</h1>
          <form>
            <label>Name:
              <input 
                name='username' 
                type='text' 
                value={inputs.username || ""} 
                onChange={handleChange}
              ></input>
            </label>
            <label>Email:
              <input 
                name='Email' 
                type='text' 
                value={inputs.Email || ""} 
                onChange={handleChange}
              ></input>
            </label>
            <label>Password:
              <input 
                name='password' 
                type='password' 
                value={inputs.password || ""} 
                onChange={handleChange}
              ></input>
              <button type='submit'>Sign Up</button>
            </label>          
          </form>
          <p>{}</p>
        </div>
        
    )
  }

  export default Signup;