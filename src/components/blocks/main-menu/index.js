import React from 'react'
import './index.sass'

class MainMenu extends React.Component {
  render() {
    return (
      <div>
          <div className="main-menu">
            <a href="/" className="main-menu__logo">
              <img src="/" alt="logo"/>
            </a>
            <div className="main-menu__nav">
              <a href="/" className="main-menu__item">
                <i className="main-menu__item-icon"></i>
              </a>
              <a href="/" className="main-menu__item">
                <i className="main-menu__item-icon"></i>
              </a>
              <a href="/" className="main-menu__item">
                <i className="main-menu__item-icon"></i>
              </a>
              <a href="/" className="main-menu__item">
                <i className="main-menu__item-icon"></i>
              </a>
              <a href="/" className="main-menu__item">
                <i className="main-menu__item-icon"></i>
              </a>
            </div>

            <div className="main-menu__user">
              <a href="/">
                <img src="/" alt=""/>
              </a>
            </div>
          </div>
      </div>
    )
  }
}

export default MainMenu;