// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import './App.css';
import Login from './components/Login';
import SignUp from './components/SignUp';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  // const [message, setMessage] = useState(null);
  // const [isFetching, setIsFetching] = useState(false);
  // const [url, setUrl] = useState('/api');

  // const fetchData = useCallback(() => {
  //   fetch(url)
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error(`status ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then(json => {
  //       setMessage(json.message);
  //       setIsFetching(false);
  //     }).catch(e => {
  //       setMessage(`API call failed: ${e}`);
  //       setIsFetching(false);
  //     })
  // }, [url]);

  // useEffect(() => {
  //   setIsFetching(true);
  //   fetchData();
  // }, [fetchData]);

  return (
    <Fragment>
        <div className="container">
          <Login />
        </div>
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
