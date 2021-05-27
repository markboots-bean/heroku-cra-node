import React, { Fragment, useState } from 'react';

const SignUp = () => {
    const [name, setName] = useState("")
     //state     set state   default state (in input field)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [type, setType] = useState("")


    const onSubmitForm = async (e) => {
        e.preventDefault(); // so it doesn't refresh
        try {
            const body = { name, username, password, type };
            const response = await fetch("/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log("fetch method called to POST");
            console.log(response);
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-2">Employee Sign Up</h1>
<<<<<<< HEAD
            <form>
            <form onSubmit={onSubmitForm}>
                <label name="name" for="name">Name:</label>
=======
            <form onSubmit={onSubmitForm}>
                <label name="name" htmlFor="name">Name:</label>
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
                <input type="name" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <label name="username" htmlFor="username">Username:</label>
                <input type="username" className="form-control" value={username} onChange={e => setUserName(e.target.value)}/>
<<<<<<< HEAD
                <label name="password" for="password">Password:</label>
                <input type="password" className="form-control" />
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                {/* <label name="type" for="type">Type:</label>
                <input type="type" className="form-control" value={type} onChange={e => setType(e.target.value)}/> */}
                <button className="btn btn-success">Sign up</button>
=======
                <label name="password" htmlFor="password">Password:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                <label name="type" htmlFor="type">Type:</label>
                <input type="type" className="form-control" value={type} onChange={e => setType(e.target.value)}/>
                <button className="btn btn-success mt-3">Sign up</button>
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
            </form>
        </Fragment>
    )
}

export default SignUp;