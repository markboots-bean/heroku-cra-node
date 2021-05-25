import React, { Fragment } from "react";

const Login = () => {

    const[username , setUsername] = useState("")
    const[password , setPassword] = useState("")
    const[type , setType] = useState("")


    const onSubmitForm = (e) => {
        e.preventDefault();
        try {
            const body = { username };
            const response = fetch("http://localhost:5000/login", {
                method: "GET",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <Fragment>
            <h1 className="text-center mt-2"> Task Manager </h1>
            <h2>Login Page</h2>
            <form className="d-flex mt-2" onSubmit={onSubmitForm}>
                {/* Make AccountType into a dropdown */}
                <label name="type" for="type">Account Type</label>
                <input type="type" class name="form-control" value={type} onChange={e => setType(e.target.value)}></input>
                <label name="username" for="username">Username</label>
                <input type="username" class name="form-control" value={username} onChange={e => setUsername(e.target.value)}></input>
                <label name="password" for="password">Password</label>
                <input type="password" class name="form-control" value={password} onChange={e => setPassword(e.target.value)}></input>
                <button className="btn btn-success">New Employee? Click here.</button>
                <button className="btn btn-success">Login</button>
            </form>
        </Fragment>
    )
}

export default Login;