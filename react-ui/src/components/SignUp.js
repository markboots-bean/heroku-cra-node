import React, { Fragment, useState } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import Login from "./login";

const SignUp = props => {
    const [name, setName] = useState("")
     //state     set state   default state (in input field)
    const [username, setUserName] = useState("")
    const [password, setPassword] = useState("")
    // const [type, setType] = useState("")


    const onSubmitForm = async (e) => {
        e.preventDefault(); // so it doesn't refresh
        try {
            const body = { name, username, password };
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
        props.history.push('/login');
    }

    return (
        <Fragment>
            <h1 className="text-center mt-2">Employee Sign Up</h1>
            <form onSubmit={onSubmitForm}>
                <label name="name" htmlFor="name">Name:</label>
                <input type="name" className="form-control" value={name} onChange={e => setName(e.target.value)}/>
                <label name="username" htmlFor="username">Username:</label>
                <input type="username" className="form-control" value={username} onChange={e => setUserName(e.target.value)}/>
                <label name="password" htmlFor="password">Password:</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                {/* <label name="type" for="type">Type:</label>
                <input type="type" className="form-control" value={type} onChange={e => setType(e.target.value)}/> */}
                <button className="btn btn-success">Sign up</button>
            </form>
        </Fragment>
    )
}

export default SignUp;