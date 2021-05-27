// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import './App.css';
import SignUp from './components/SignUp';
import ViewAllTasks from './components/ViewAllTasks';

function App() {


  return (
    <Fragment>
      <div className="container">
        <SignUp />
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
