import React from 'react';
import { withRouter, Link } from 'react-router-dom';

class SignupForm extends React.Component {
  state = {
    username: '',
    email: '',
    password: '',
    password_confirmation: ''
  }


  handleChange = (e) => {
    console.log(e.target.value)
    const name = e.target.name
    this.setState({
      [name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
  fetch('http://localhost:3000/users/confirmation', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(this.state)
  })
  .then(r => r.json())
  }

  render() {

    return (
      <div id="signupcontainer">
        <Link to='/' ><i className="fas fa-kiwi-bird"></i></Link><br/>
      <div id="signupform">
        <h4>Sign Up Here</h4>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} type='text' placeholder='Username' name='username'/><br/>
          {' '}<br/>
        <input onChange={this.handleChange} type='text' placeholder='Email' name='email'/><br/>
          {' '}<br/>
        <input onChange={this.handleChange} type='password' placeholder='Password' name='password'/><br/>
          {' '}<br/>
        <input type='submit' placeholder='signup' />
        </form>
      </div>
      </div>
    )
  }
}

export default withRouter(SignupForm);
