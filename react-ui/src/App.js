// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import './App.css';
<<<<<<< HEAD
import ViewAllTasks from './components/ViewAllTasks';
=======
import Login from './components/Login';
import SignUp from './components/SignUp';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65

function App() {


  return (
    <Fragment>
<<<<<<< HEAD
      <div className="container">
        <ViewAllTasks />
      </div>
=======
        <div className="container">
          <Login />
        </div>
        <div className="container">
          <SignUp />
        </div>
>>>>>>> aeca204ed12083e9760d3e7b3688d8825a730a65
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
