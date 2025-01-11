import React, { useState } from "react";
import ReactDOM from "react-dom";

function Signup() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
    {
      console.log(name);
    }
  };
  return (
    <div className="container">
      <div className="left-panel">
        <div className="logo">🌴</div>
        <h1 className="logo-text">Platform for Personal Carbon Credits.</h1>
      </div>
      <div className="right-panel">
        <form className="form">
          <h2>sign up</h2>
          <label htmlFor="username">Name</label>
          <input
            name="username"
            type="text"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          <label htmlFor="Email">
            Email
            <input
              name="Email"
              type="text"
              value={inputs.Email || ""}
              onChange={handleChange}
            ></input>
          </label>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
          <button type="submit" className="submit-button">
            Sign Up
          </button>
          <p>Already a user?<a>Sign In!</a></p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
