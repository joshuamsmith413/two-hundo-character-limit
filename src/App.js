import React from 'react';
import MainContainer from './components/MainContainer'
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <MainContainer />
      </div>
    </Router>
  );
}

export default withRouter(App);
