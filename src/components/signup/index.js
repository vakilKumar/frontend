import React, { useCallback, useReducer } from "react";

const initialData = {
    name: '',
    email: '',
    password: ''
}


const dataReducer = (state, action) => {
    switch (action.type) {
        case "name":
            return {
                ...state,
                name: action.name
            }
        case "email":
            return {
                ...state,
                email: action.name
            }
        case "password":
            return {
                ...state,
                password: action.name
            }

    }

}

const SignUp = () => {
    const [data, dispatch] = useReducer(dataReducer, initialData);


    const handleTextField = useCallback((e, from) => {
        dispatch({ name: e.target.value, type: from })
    }, [data])

    const handleSignUpData = useCallback( async () => {
        // console.log('------ all data ---------', data)
    }, [data])


    return (
        <div
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignContent: 'center',
                height: '100%',
                backgroundColor: 'red'
            }}
        >
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 20,
                    width: '50%',
                    backgroundColor: 'lightgray',
                    padding: 40
                }}>
                <p>Sign-up</p>
                <input
                    className="inputBox"
                    type="text"
                    placeholder=" enter Name"
                    onChange={(e) => handleTextField(e, 'name')}
                    value={data.name}
                />
                <input
                    className="inputBox"
                    type="text"
                    placeholder=" enter Email"
                    onChange={(e) => handleTextField(e, 'email')}
                    value={data.email}
                />
                <input
                    className="inputBox"
                    type="text" placeholder="enter password"
                    onChange={(e) => handleTextField(e, 'password')}
                    value={data.password}
                />
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '100%',
                        justifyContent: 'center'
                    }}
                >
                    <button className="signUpButton" type="button" onClick={handleSignUpData}>SignUp</button>
                </div>
            </div>
        </div>
    )
}

export default SignUp;