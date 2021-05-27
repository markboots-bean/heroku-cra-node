// import React, { useCallback, useEffect, useState } from 'react';

import React, { Fragment } from 'react';
import './App.css';
import ViewAllTasks from './components/ViewAllTasks';

function App() {


  return (
    <Fragment>
      <div className="container">
        <ViewAllTasks />
      </div>
    </Fragment>
  );

}

export default App;
