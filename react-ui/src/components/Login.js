import React, { Fragment, useState } from "react";

const Login = () => {

    const[username , setUsername] = useState("")
    const[password , setPassword] = useState("")
    const[type , setType] = useState("")


    const onSubmitForm = async (e) => {
        e.preventDefault();
        try {
            const body = { username };
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
            <form onSubmit={onSubmitForm}>
                {/* Make AccountType into a dropdown */}
                <label name="type" htmlFor="type">Account Type</label>
                <select name="type" id="type" className="form-control">
                    <option value="">--Please choose account type--</option>
                    <option value="Employer">Employer</option>
                    <option value="Employee">Employee</option>
                </select>
                <label name="username" htmlFor="username">Username</label>
                <input type="username" className="form-control" value={username} onChange={e => setUsername(e.target.value)}/>
                <label name="password" htmlFor="password">Password</label>
                <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)}/>
                <button className="btn btn-success mt-3">Login</button>
            </form>
            <button className="btn btn-hyperlink mt-3">New Employee? Click here.</button>
        </Fragment>
    )
}

export default Login;