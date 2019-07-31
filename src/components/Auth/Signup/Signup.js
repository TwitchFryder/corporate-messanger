import React, { Component } from 'react';
import fire from '../../../config/Fire';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      userName: '',
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
  
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      fire.auth().currentUser.updateProfile({
        displayName: document.getElementById("userName").value,
        photoURL: "src/assets/images/avatar.png"
      });
    })
    .catch((error) => {
      if(error.code === 'auth/invalid-email' || error.code === 'auth/user-not-found') {
        this.setState({ errorEmail: {code: error.code, message: error.message} });
      }
      if(error.code === 'auth/wrong-password' || error.code === 'auth/weak-password') {
        this.setState({ errorPassword: {code: error.code, message: error.message} });
      }
    })
  }
  render() {
    return (
      <> 
      <form>
        <div className="input-block">
          <input 
            value={this.state.userName} 
            onChange={this.handleChange} 
            type="text" name="userName" 
            className="form__input" 
            id="userName" 
            aria-describedby="nameHelp" 
            placeholder=" "
            required
          />
          <label className="form__label" htmlFor="userName">Имя</label>
          {!this.state.userName && <div className="form__error">Введите имя</div>}
        </div>
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
          <label className="form__label" htmlFor="email">E-Mail</label>
          {this.state.errorEmail.message && <div className="form__error">{this.state.errorEmail.message}</div>}
        </div>
        <div className="input-block">
          <input 
            value={this.state.password} 
            onChange={this.handleChange} 
            type="password" 
            name="password" 
            className="form__input" 
            id="exampleInputPassword1" 
            placeholder=" " 
            required
          />
          {this.state.errorPassword.message && <div className="form__error">{this.state.errorPassword.message}</div>}
          <label className="form__label" htmlFor="email">Пароль</label>
        </div>
        <button onClick={this.signup} type="submit" className="form__button">Signup</button>
      </form>
    </>
    )
  }
}
export default Signup;