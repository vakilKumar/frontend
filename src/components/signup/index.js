import React, { useCallback, useReducer } from "react";

const initialData = {
  name: "",
  email: "",
  password: "",
};

const dataReducer = (state, action) => {
  switch (action.type) {
    case "name":
      return {
        ...state,
        name: action.name,
      };
    case "email":
      return {
        ...state,
        email: action.name,
      };
    case "password":
      return {
        ...state,
        password: action.name,
      };
    case "role":
      return {
        ...state,
        role: action.name,
      };
  }
};

const SignUp = () => {
  const [data, dispatch] = useReducer(dataReducer, initialData);

  const handleTextField = useCallback(
    (e, from) => {
      dispatch({ name: e.target.value, type: from });
    },
    [data]
  );

  const handleSignUpData = async () => {
    console.log('------ all data ---------', data)
    try {

        fetch("http://localhost:9000/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: data.name,
        password: data.password,
        role:  data.role,
        email: data.email

      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if(data.message === 'User created successfully'){
            alert('sign up successfully')
        }
      })
      .catch((error) => console.error("Error:", error));
        
    } catch (error) {
        console.log('----- error -------->>>>>>', error)
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        height: "100%",
        backgroundColor: "red",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 5,
          width: "50%",
          backgroundColor: "lightgray",
          padding: 40,
        }}
      >
        <p>user name</p>
        <input
          className="inputBox"
          type="text"
          placeholder=" enter Name"
          onChange={(e) => handleTextField(e, "name")}
          value={data.name}
        />
         <p>Email</p>
        <input
          className="inputBox"
          type="text"
          placeholder=" enter Email"
          onChange={(e) => handleTextField(e, "email")}
          value={data.email}
        />
         <p>password</p>
        <input
          className="inputBox"
          type="text"
          placeholder="enter password"
          onChange={(e) => handleTextField(e, "password")}
          value={data.password}
        />
         <p>role</p>
        <input
          className="inputBox"
          type="text"
          placeholder=" role"
          onChange={(e) => handleTextField(e, "role")}
          value={data.role}
        />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <button
            className="signUpButton"
            type="button"
            onClick={handleSignUpData}
          >
            SignUp
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
