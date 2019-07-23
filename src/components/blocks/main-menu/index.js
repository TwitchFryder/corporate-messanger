import React from 'react'
import './index.sass'
import logo from './logo.png'
import avatar from './avatar.png'

class MainMenu extends React.Component {
  render() {
    return (
      <div className="main-menu">
        <a href="/" className="main-menu__logo">
          <img src={logo} alt="logo"/>
        </a>
        <div className="main-menu__nav">
          <a href="/" className="main-menu__item main-menu__item--1 main-menu__item--active new-message"></a>
          <a href="/" className="main-menu__item main-menu__item--2"></a>
          <a href="/" className="main-menu__item main-menu__item--3"></a>
          <a href="/" className="main-menu__item main-menu__item--4"></a>
          <a href="/" className="main-menu__item main-menu__item--5"></a>
        </div>
        <div className="main-menu__user">
          <a href="/">
            <img src={avatar} alt="avatar"/>
          </a>
        </div>
      </div>
    )
  }
}

export default MainMenu;