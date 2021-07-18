import React from 'react';
import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import TempPage from './pages/TempPage'

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact />
      <Route component={TempPage} path="/temp" />
    </>
  );
}

export default App;
