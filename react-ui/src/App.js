// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import { Switch, Route, Link } from 'react-router-dom'
import './App.css';

import Login from './components/login';
import SignUp from './components/signup';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = React.useState(null);

    async function login(user = null) {
      setUser(user);
    }
    // async function logout(){
    //   setUser(null);
    // }
    async function signup(user = null) {
      setUser(user);
    }

  return (
    <Fragment>
        <div className="container">
          <Login />
        </div>
        {/* <div className="container">
          <SignUp />
        </div> */}
        <div>
        <Switch>
                <Route exact path={["/login"]} component={Login} />
  
                <Route 
                  path="/login"
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
