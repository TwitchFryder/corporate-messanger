import React from 'react';

class Register extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {   
        login: '',
        password: '',
        email: '',
      }
    }
    this.onChangeLogin = this.onChangeLogin.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
  }
  loginHandler = () => {  
    localStorage.setItem('login', this.state.login);
    localStorage.setItem('password', this.state.password);
    localStorage.setItem('email', this.state.email);
  }

  onChangePassword(event){
    this.setState({password: event.target.value});
  }

  onChangeLogin(event) {
    console.log(event.target.value);
    
    this.setState({login: event.target.value});
  }

  onChangeEmail(event) {
    this.setState({email: event.target.value});
  }

  handleFormSubmit = event => {
    event.preventDefault();
  }
  render () {
    return (
      <>
        <div className="main">
          <div className="main__wrapper">
            <form className="form" onSubmit={this.handleFormSubmit}>
              <h2 className="form__title">Регистрация</h2>
              <input className="form__input" type="text" name="login" value={this.state.user.login}  onChange={this.onChangeLogin} placeholder="Логин" required/>
              <input className="form__input" type="password" name="password" value={this.state.user.password}  onChange={this.onChangePassword} placeholder="Пароль" required/>
              <input className="form__input" type="email" name="email" value={this.state.user.email}  onChange={this.onChangeEmail} placeholder="E-Mail" required/>
              <button onClick={this.loginHandler} className="form__button">Зарегистрироваться</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Register;