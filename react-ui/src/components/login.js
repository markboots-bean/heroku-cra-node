import React, { Fragment, useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import SignUp from "./signup";

const Login = props => {

    const[username , setUsername] = useState("")
    const[password , setPassword] = useState("")
    const[type , setType] = useState("")

    async function signup(user = null) {
        // setUser(user);
        props.history.push('/signup');
    }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { username, password };
            const response = await fetch("/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log("fetch method called to POST");
            const jsonData = await response.json();
            console.log(jsonData);

        } catch (error) {
            console.error(error.message);
        }
        props.history.push('/employeetasks');

    };

    return (
        <Fragment>
            <h1 className="text-center mt-2"> Task Manager Login</h1>
            <div>
                <form onSubmit={onSubmitForm}>
                    {/* Make AccountType into a dropdown */}
                    <label name="username" htmlFor="username">Username</label>
                    <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label name="password" htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                    <div className="text-center">
                        <button className="btn btn-success mt-3">Login</button>
                    </div>
                </form>
                {/* <button className="btn btn-hyperlink mt-3">New Employee? Click here.</button> */}
                <div className="text-center mt-3">
                    <Link to={"/signup"} className="App-link">
                        New Employee? Signup here
                    </Link>
                </div>
            </div>
            <div>
                <Switch>
                    <Route 
                        exact path="/signup"
                        render={(props) => (
                        <SignUp {...props} signup={signup} />
                        )}
                    />
                </Switch>
            </div>
        </Fragment>
    )
}

export default Login;
