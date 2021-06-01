import React, { Fragment, useState } from "react";
import { Switch, Route, Link } from 'react-router-dom'
import SignUp from "./signup";
import Login from "./login";

const Home = props => {

    async function signup(user = null) {
        // setUser(user);
        props.history.push('/signup');
    }

    async function login(user = null) {
        // setUser(user);
        props.history.push('/login');
    }

    return (
        <Fragment>
            <div>
                <h1 className="text-center mt-2">Welcome to the Task Manager</h1>
                <div className="text-center">
                    <Link to={"/signup"} className="btn btn-success mt-5">
                        New Employee? Signup here
                    </Link>
                    <br>
                    </br>
                    <Link to={"/login"} className="btn btn-success mt-5">
                        Existing Employer or Employee? Login here
                    </Link>
                </div>
                <div>
                    <Switch>
                        <Route 
                            exact path="/signup"
                            render={(props) => (
                            <SignUp {...props} signup={signup} />
                            )}
                        />
                        <Route 
                            exact path="/login"
                            render={(props) => (
                            <Login {...props} login={login} />
                            )}
                        />
                    </Switch>
                </div>
            </div>
        </Fragment>

    );
}

export default Home;