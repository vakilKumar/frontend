import React, { useState } from "react";
import '../../App.css'

const Login = () => {
  const [userName, setUserName] = useState("");
  const [userPass, setUserPass] = useState("");

  const handleName = (e) => {
    setUserName(e.target.value);
  };
  const handlePass = (e) => {
    setUserPass(e.target.value);
  };


  const submiteBtn = () => {
    try {

      fetch("http://localhost:9000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: userName,
      password: userPass,

    }),
  })
    .then((response) => response.json())
    .then((data) => {
      if(data.message === 'Login successfully'){
          alert('sign up successfully')
      }
    })
    .catch((error) => console.error("Error:", error));
      
  } catch (error) {
      console.log('----- error -------->>>>>>', error)
  }
  }

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "500px",
      }}
    >
      <div
        style={{
          padding: 20,
          borderWidth: 1,
          backgroundColor: "red",
        }}
      >
        <p>{"Login"}</p>
        <div>
          <p>{"Enter your name"}</p>
          <input
            className="inputBox"
            type="text"
            placeholder=" enter Email id"
            onChange={(e) => handleName(e)}
            value={userName}
          />
        </div>

        <div>
          <p>{"Enter your password"}</p>
          <input
            className="inputBox"
            type="text"
            placeholder=" enter password"
            onChange={(e) => handlePass(e)}
            value={userPass}
          />
        </div>

        <div
          style={{
            display: "flex",
            // alignItems: "center",
            width: "100%",
            justifyContent: "center",
            marginTop: 20
          }}
        >
          <button
            className="signUpButton"
            type="button"
            onClick={submiteBtn}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
