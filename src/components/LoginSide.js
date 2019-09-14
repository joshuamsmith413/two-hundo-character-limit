import React from 'react';
import { withRouter, Link } from 'react-router-dom';

function LoginSide() {

  return (
    <div id='LoginSide'>
      <div id='loginform'>
        <input type='text'placeholder="username"/>{' '}
        <input type='text'placeholder="password"/>{' '}
        <input type='submit'/>
      </div>
      <div className='centereddiv'>
        <div id='enticingstatement'>
        <i className="fas fa-kiwi-bird"></i><br/>
          See what's happening with our five users right now
        </div>
        <div id='joinnow'>
          Join fewsentencemessage.com today. <br/>
          <Link to='/signup'>
            <button>signup</button>
          </Link>
          <button> Sign in</button><br/>
        </div>
      </div>
    </div>
  )
}

export default withRouter(LoginSide);
