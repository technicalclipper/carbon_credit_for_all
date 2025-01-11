import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../signin.css";

function Signin() {
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
        <h1>Platform for Personal Carbon Credits.</h1>
      </div>
      <div className="right-panel">
        <form className="form">
          <h2>sign in</h2>
          <label htmlFor="username">Name:</label>
          <input
            name="username"
            type="text"
            value={inputs.username || ""}
            onChange={handleChange}
          />
          <label htmlFor="password">Password:</label>
          <input
            name="password"
            type="password"
            value={inputs.password || ""}
            onChange={handleChange}
          ></input>
          <button type="submit" className="submit-button">
            Sign In
          </button>
        </form>
        <p>{}</p>
      </div>
    </div>
  );
}

export default Signin;
