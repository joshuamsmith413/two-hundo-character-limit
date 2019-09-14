import React from 'react'
import { withRouter } from 'react-router-dom';

function BlueWelcome() {
  return (
    <div id="BlueWelcome">
      <div class='centereddiv'>
        <div id='tackyheadline'>
          You're one step away from the shiny new fewsentencemessage.com!
        </div>
        <div id="underheadline">
          We are adding very basic features like...
        </div>
        <div id='basicfeatures'>
        <span></span>
          <div className="headers"> <i className="fas fa-sign-in-alt"></i> Log in </div>
          <div className='text'>and log out</div>
          <div className='headers'><i className="far fa-comments"></i> Post </div>
          <div className='text'>a message with few sentences</div>
          <div className='headers'><i className="fas fa-user-friends"></i> Follow </div>
          <div className='text'>other users</div>
          <div className='headers'> <i className="fas fa-reply-all"></i> Respectfully </div>
          <div className='text'>like and comment on other messages</div>
        </div>
      </div>
    </div>
  )
}


export default withRouter(BlueWelcome);
