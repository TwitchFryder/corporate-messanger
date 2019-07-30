import React from 'react'
import './index.sass'
import avatar from './avatar.png'

class Messages extends React.Component {
  render() {
    return (
      <div className="messages-wrap">
        <div className="messages-wrap__header">
            <div className="messages-wrap__user">
              <div className="messages-wrap__avatar">
                <img src={avatar} alt="avatar"/>
              </div>
              <div className="messages-wrap__info">
                <div className="messages-wrap__name">
                    Антон Королев
                  </div>
                  <div className="messages-wrap__peer-online">
                    Был в сети 5 минут назад
                  </div>
                </div>
            </div>
            <div className="messages-wrap__controls">
              <div className="control-search">
                <i className="mdi mdi-magnify"></i>
              </div>
              <div className="control-favorites">
                <i className="mdi mdi-heart"></i>
              </div>
              <div className="control-notify">
                <i className="mdi mdi-bell"></i>
              </div>
              <div className="control-options">...</div>
            </div>
        </div>
        <div className="messages-list">
            <div className="messages-list__item">
                <div className="messages-list__avatar">
                  <img src={avatar} alt="avatar"/>
                </div>
                <div className="message-list__inner">
                  <div className="messages-list__head">
                      <div className="messages-list__time">
                          Вчера, 23:58
                      </div>
                      <div className="messages-list__controls">
                          управление
                      </div>
                  </div>
                  <div className="messages-list__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet sed aliquam dignissimos, sapiente enim. 
                  </div>
                </div>
            </div>
            <div className="messages-list__item messages-list__item--myself">
                <div className="messages-list__avatar">
                  <img src={avatar} alt="avatar"/>
                </div>
                <div className="message-list__inner">
                  <div className="messages-list__head">
                      <div className="messages-list__time">
                          Вчера, 23:58
                      </div>
                      <div className="messages-list__controls">
                          управление
                      </div>
                  </div>
                  <div className="messages-list__message">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis amet sed aliquam dignissimos, sapiente enim. 
                  </div>
                </div>
            </div>
        </div>
        <form className="messages-wrap__form">
          <input type="text" name="message"/>
          <button>Отправить</button>
        </form>
      </div>
    )
  }
}

export default Messages;