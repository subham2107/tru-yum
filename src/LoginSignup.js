import React from 'react';
import './LoginSignup.css';
import NavBar from './NavBar';
import Footer from './Footer';


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
    // e.preventDefault();
    // const { email, password } = this.state;
    // fetch('/api/users', {
    //   method: 'POST',
    //   body: JSON.stringify({ email, password }),
    //   headers: {
    //     'Content-type': 'application/json; charset=UTF-8'
    //   }
    // });
    window.location = '/signup';
  }

  render() {
    return (
       <div>
         <div style={{minHeight: "calc(100vh - 31px)"}}>
        <NavBar/>
        <div class="login_div">
        <form class="login_form">
          
          <div class="loginEmail">Email: <input placeholder="email" name="email" required type="email" onInput={this.onInput} value={this.state.email}></input></div>
          
          
          <div class="loginPass">Password: <input placeholder="password" name="password" required type="password" onInput={this.onInput} value={this.state.password}></input></div>
          
          <div>
            <input class= "loginBtn" type="submit" onClick={this.onLoginClick} value="Login"></input>
          
            <input class= "signupBtn" type="submit" onClick={this.onSignupClick} value="SignUp"></input>
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
