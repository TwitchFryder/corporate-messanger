import React, { Component } from 'react';
import fire from '../../../config/Fire';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      email: '',
      password: '',
      errorEmail: {
        code: '',
        message: ''
      },
      errorPassword: {
        code: '',
        message: ''
      },
    };
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
      errorEmail: {code: '', message: ''},
      errorPassword: {code: '', message: ''}
    });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      if(error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        this.setState({ errorEmail: {code: error.code, message: error.message} });
      }
      if(error.code === 'auth/wrong-password') {
        this.setState({ errorPassword: {code: error.code, message: error.message} });
      }
    });
  }
  
  render() {
    return (
      <> 
        <form>
          <div className="input-block">
            <input 
              value={this.state.email}
              onChange={this.handleChange}
              type="email" name="email"
              className="form__input" 
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder=" " 
              required
            />
            <label className="form__label" htmlFor="email">Введите Email</label>
            {this.state.errorEmail.message && <div className="form__error">{this.state.errorEmail.message}</div>}
          </div>
          <div className="input-block">
            <input
              value={this.state.password}
              onChange={this.handleChange} 
              type="password" name="password" 
              className="form__input" 
              id="exampleInputPassword1" 
              placeholder=" " 
              required
            />
            <label className="form__label" htmlFor="password">Введите пароль</label>
            {this.state.errorPassword.message && <div className="form__error">{this.state.errorPassword.message}</div>}
          </div>
          <button type="submit" onClick={this.login} className="form__button">Login</button>
        </form>
    </>
    )
  }
}
export default Login;