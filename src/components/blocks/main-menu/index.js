import React from 'react'
import './index.sass'
import logo from './logo.png'
import avatar from './avatar.png'
import fire from '../../../config/Fire'

class MainMenu extends React.Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  logout(e) {
      e.preventDefault();
      fire.auth().signOut();
  }

  render() {
    return (
      <div className="main-menu">
        <a href="/" className="main-menu__logo">
          <img src={logo} alt="logo"/>
        </a>
        <div className="main-menu__nav">
          <span href="/" className="main-menu__item main-menu__item--1 main-menu__item--active new-message"></span>
          <span href="/" className="main-menu__item main-menu__item--2"></span>
          <span href="/" className="main-menu__item main-menu__item--3"></span>
          <span href="/" className="main-menu__item main-menu__item--4"></span>
          <span href="/" className="main-menu__item main-menu__item--5"></span>
        </div>
        <div className="main-menu__user" title={this.props.userName}>
          <a href="/" onClick={this.logout}>
            <img src={avatar} alt="avatar"/>
          </a>
        </div>
      </div>
    )
  }
}

export default MainMenu;