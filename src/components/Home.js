import React from 'react';
import BlueWelcome from './BlueWelcome.js';
import LoginSide from './LoginSide.js';
import { withRouter } from 'react-router-dom';

class Home extends React.Component {

  render() {
    return(
      <div id='home'>
        <BlueWelcome />
        <LoginSide />

      </div>
    )
  }
}

export default withRouter(Home);
