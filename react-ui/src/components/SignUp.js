import React, { Fragment, useState } from 'react';

const SignUp = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-2">Sign Up</h1>
            <form>
                <label name="name" for="name">Name:</label>
                <input type="name" className="form-control" />
                <label name="username" for="username">Username:</label>
                <input type="username" className="form-control" />
                <label name="password" for="password">Password:</label>
                <input type="password" className="form-control" />
                <label name="type" for="type">Type:</label>
                <input type="type" className="form-control" />
                <button className="btn btn-success">Sign up</button>
            </form>
        </Fragment>
    )
}

export default SignUp;