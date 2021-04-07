
import React from 'react';
import './Signup.css';
import NavBar from './NavBar';
import Footer from './Footer';
import './index.css';
class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: '',
      lastname: '',
      email: '',
      password: '',
    };
  }


  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }


  onSignupClick = e => {
    e.preventDefault();
    const { firstname, lastname, email, password } = this.state;
    fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstname, lastname, email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    });
    window.location = '/login';
  }

  render() {
    return (
      <div>
        <div style={{minHeight: "calc(100vh - 31px)"}}>
        <NavBar/>
      <div className="signup_div">
        <form className="signup_form">
          
          <div className="signupFname" >First Name: <input  placeholder="first name" name="firstname" required="required" type="text" onInput={this.onInput} value={this.state.firstname}></input></div>
          <div className="signupLname">Last Name: <input  placeholder="last name" name="lastname" required="required" type="text" onInput={this.onInput} value={this.state.lastname}></input></div>
          <div className="signupEmail">Email: <input  placeholder="email" name="email" required="required" type="email" onInput={this.onInput} value={this.state.email}></input></div>
          <div className="signupPass">Password: <input  placeholder="password" name="password" required="required" type="password" onInput={this.onInput} value={this.state.password}></input></div>
          
          <div>
            <input className= "signupformBtn" type="submit" onClick={this.onSignupClick} value="Sign up"></input>
          </div>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
      
    );
  }
}

export default SignUp;
