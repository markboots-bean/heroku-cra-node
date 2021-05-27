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
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log("fetch method called to GET");
            console.log(response);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-2"> Task Manager Login</h1>
            <div>
                <form onSubmit={onSubmitForm}>
                    {/* Make AccountType into a dropdown */}
                    <label name="type" htmlFor="type">Account Type (please specify 'employee' or 'employer')</label>
                    <input type="type" className="form-control" value={type} onChange={e => setType(e.target.value)}/>
                    <label name="username" htmlFor="username">Username</label>
                    <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                    <label name="password" htmlFor="password">Password</label>
                    <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                    <button className="btn btn-success mt-3">Login</button>
                </form>
                {/* <button className="btn btn-hyperlink mt-3">New Employee? Click here.</button> */}
                <div>
                    <Link to={"/signup"} className="App-link">
                        New Employee? Click here.
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