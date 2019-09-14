import React from 'react';
import SignupForm from './SignupForm.js';
import { Route, withRouter } from 'react-router-dom';
import Home from './Home.js';
import Footer from './Footer.js';

class MainContainer extends React.Component {

  render() {

    return (
      <div id='MainContainer'>
        <Route exact path="/" component={Home} />
        <Route exact path="/signup" component={SignupForm}/>
        <Footer />
      </div>
    )
  }
}

export default withRouter(MainContainer);
