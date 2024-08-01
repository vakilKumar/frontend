import React, { useState } from "react"

const AddQuiz = () => {
    const [question, setQuestion] = useState('');
    const [option1, setOption1] = useState('');
    const [option2, setOption2] = useState('');
    const [option3, setOption3] = useState('');
    const [option4, setOption4] = useState('');
    const [correctOption, setCorrectOption] = useState('');



    const handleTextField = () => {}

    const handleSignUpData = () => {}

    return(
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignContent: 'center',
            height: '100%',
            backgroundColor: 'gray'
        }}
    >
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 5,
                width: '50%',
                backgroundColor: 'lightgray',
                padding: 40
            }}>
            <p>Add Qustion</p>
            <input
                className="inputBox"
                type="text"
                placeholder=" enter Name"
                onChange={(e) => setQuestion(e.target.value)}
                value={option1}
            />
            <p> First option</p>
            <input
                className="inputBox"
                type="text"
                placeholder=" enter Email"
                onChange={(e) => handleTextField(e, 'email')}
                value={option2}
            />
             <p> Second option</p>
            <input
                className="inputBox"
                type="text" placeholder="enter password"
                onChange={(e) => handleTextField(e, 'password')}
                value={option3}
            />
             <p> Third option</p>
            <input
                className="inputBox"
                type="text" placeholder="enter password"
                onChange={(e) => handleTextField(e, 'password')}
                value={option4}
            />
             <p> Fourth option</p>
            <input
                className="inputBox"
                type="text" placeholder="enter password"
                onChange={(e) => handleTextField(e, 'password')}
                value={correctOption}
            />
             <p> Correct option</p>
            <input
                className="inputBox"
                type="text" placeholder="enter password"
                onChange={(e) => handleTextField(e, 'password')}
                // value={data.password}
            />
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    justifyContent: 'center'
                }}
            >
                <button className="signUpButton" type="button" onClick={handleSignUpData}>Add</button>
            </div>
        </div>
    </div>
    )
}

export default AddQuiz