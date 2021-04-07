import React from 'react';
import './LoginSignup.css';
import NavBar from './NavBar';
import Footer from './Footer';
import './index.css';


class LoginSignup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  componentDidMount() {
    fetch('/api/users/me').then(user => {
      if (user.status === 200) {
        fetch('./name').then(name => {

        localStorage.setItem('user', JSON.stringify(name));
        window.location = '/';
      })
      }
    });
  }

  onInput = event => {
    this.setState({ [event.target.name]: event.target.value });
  }

  onLoginClick = e => {
    e.preventDefault();
    const { email, password } = this.state;
    fetch('/api/sessions', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8'
      }
    }).then(res => {
      if (res.status === 204) {
        fetch('api/users/name').then(res => res.json()).then(name => {
        localStorage.setItem('user', name.firstname);
        window.location = '/';
      })
      }
    });
  }

  onSignupClick = e => {
    e.preventDefault();
    window.location = '/signup';
  }

  render() {
    return (
       <div>
         <div style={{minHeight: "calc(100vh - 31px)"}}>
        <NavBar/>
        <div className="login_div">
        <form className="login_form">
          
          <div className="loginEmail">Email: <input placeholder="email" name="email"  type="email" onInput={this.onInput} value={this.state.email}></input></div>
          
          
          <div className="loginPass">Password: <input placeholder="password" name="password"  type="password" onInput={this.onInput} value={this.state.password}></input></div>
          
          <div>
            <input className= "loginBtn" type="submit" onClick={this.onLoginClick} value="Login"></input>
          
            <input className= "signupBtn" type="submit" onClick={this.onSignupClick} value="SignUp"></input>
          </div>
        </form>
        </div>
        </div>
        <Footer/>
        </div>
       
        
      
    );
  }
}

export default LoginSignup;
