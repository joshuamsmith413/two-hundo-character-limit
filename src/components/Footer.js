import React from 'react';
import { withRouter } from 'react-router-dom';

class Footer extends React.Component {

  render() {

    return (
      <span id="footer">
        <span>About </span>{' '}
        <span>Careers </span>{' '}
        <span>Help Center </span>{' '}
        <span>Privacy Policy </span>{' '}
        <span>Ads Info </span>{' '}
        <span>Cookies </span>{' '}
        <span>Developer </span>{' '}
      </span>
    )
  }
}


export default withRouter(Footer);
