import React, { Component } from 'react';
import fire from '../../config/Fire';
import './index.sass';

class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      userName: '',
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
      console.log(error);
    });
  }
  
  signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u) => {
      let user = fire.auth().currentUser;

      user.updateProfile({
        displayName: document.getElementById("userName").value,
        photoURL: "src/assets/images/avatar.png"
      });
    }).then((u)=>{console.log(u)})
    .catch((error) => {
      console.log(error);
    })
  }
  render() {
    return (
      <> 
      <div className="main">
        <div className="main__wrapper">
          <div className="form-wrapper">
            <div className="form__tabs">
              <div className="form__tab form__tab--active">Авторизация</div>
              <div className="form__tab">Регистрация</div>
            </div>
            <form>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form__input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form__input" id="exampleInputPassword1" placeholder="Password" required/>

              <button type="submit" onClick={this.login} className="form__button">Login</button>
            </form>

            <form>
              <input value={this.state.userName} onChange={this.handleChange} type="text" name="userName" className="form__input" id="userName" aria-describedby="nameHelp" placeholder="Имя"/>
              <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form__input" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
              <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form__input" id="exampleInputPassword1" placeholder="Password" required/>

              <button onClick={this.signup} className="form__button">Signup</button>
            </form>
          </div>
        </div>
      </div>
    </>
    )
  }
}
export default Login;