// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './components/home'
import Login from './components/login';
import SignUp from './components/signup';
import viewalltasks from './components/viewalltasks';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = React.useState(null);

    async function login(user = null) {
      setUser(user);
    }
    async function logout(){
      setUser(null);
    }
    async function signup(user = null) {
      setUser(user);
    }

  return (
    <Fragment>
        <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark" expand="lg">
              <div class="row">
              <a href="/" className="navbar-brand">
                Task Manager
              </a>
              </div>
              <div className="navbar-nav ml-auto">
                {/* <li className="nav-item">
                  <Link to={"/home"} className="nav-link">
                    Home
                  </Link>
                </li> */}
                {/* <li className="nav-item" >
                  { user ? (
                    <a onClick={logout} className="nav-link" style={{cursor:'pointer'}}>
                      Logout {user.name}
                    </a>
                  ) : (            
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                  )}
                </li>
                <li className="nav-item">
                  <Link to={"/signup"} className="nav-link">
                    Sign Up
                  </Link>
                </li> */}
              </div>
            </nav>
        </div>
        {/* <div className="container">
          <SignUp />
        </div> */}
        <div>
        <Switch>
            <Route exact path={["/"]} component={Home} />
                <Route exact path={["/home"]} component={Home} />
                <Route 
                  exact path="/login"
                  render={(props) => (
                    <Login {...props} login={login} />
                  )}
                />
                <Route 
                  exact path="/signup"
                  render={(props) => (
                  <SignUp {...props} signup={signup} />
                )}
                />
              </Switch>
        </div>


    </Fragment>
  );

  // return (
  //     <Router>
  //       <div className="container">
  //         <Login />
  //         {/* <Route path="/signup" component={SignUp} /> */}
  //       </div>
  //       {/* <div className="container">
  //         <SignUp />
  //       </div> */}
  //     </Router>
  // );

}

export default App;
