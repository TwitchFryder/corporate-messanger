import React from 'react';
import './index.sass';

class Login extends React.Component {
  render () {
    return (
      <>
        <div className="main">
          <div className="main__wrapper">
            <form className="form">
              <h2 className="form__title">Авторизация</h2>
              <input className="form__input" type="text" name="login" placeholder="Логин" required/>
              <input className="form__input" type="password" name="password" placeholder="Пароль" required/>
              <button className="form__button">Войти</button>
            </form>
          </div>
        </div>
      </>
    )
  }
}

export default Login;