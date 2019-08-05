import React from 'react'
import './index.sass'
import avatar from './avatar.png'
import fire from '../../../../config/Fire.js';

class Messages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: {
        message: {
          id: '',
          username: '',
          text: '',
          avatar: '',
          dataTime: ''
        }
      }
    }
  }
  
  writeUserData(userId, userName, userEmail, userAvatar, userText, userDataTime) {
    fire.database().ref('messages').push({
      userId: userId,
      username: userName,
      email: userEmail,
      avatar: userAvatar,
      text : userText,
      dataTime: userDataTime
    });
    var messages = fire.database().ref('messages');
    messages.on('value', (data) => {
      let messages = data.val();
      let keys = Object.keys(messages)
      for(let i = 0; i < keys.length; i++) {
        let index = keys[i];
        this.setState({ messages: {
          message: {
            userId: messages[index].id,
            username: messages[index].username,
            message: messages[index].message,
            avatar: messages[index].avatar,
            dataTime: messages[index].dataTime
          }
        }});
      }
    })
  }


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
            {this.state.messages.message.text ?
              <div className="messages-list__item messages-list__item--myself">
                  <div className="messages-list__avatar">
                    <img src={avatar} alt="avatar"/>
                  </div>
                  <div className="message-list__inner">
                    <div className="messages-list__head">
                        <div className="messages-list__time">
                          {/* {this.state.message.dataTime} */}
                        </div>
                        <div className="messages-list__controls">
                            управление
                        </div>
                    </div>
                    <div className="messages-list__message">
                      {/* {this.state.message.message} */}
                    </div>
                  </div>
              </div>
              : ''
            }
        </div>
        <form className="messages-wrap__form" onSubmit={e => e.preventDefault()}>
          <input className="messages-wrap__input" type="text" name="message"/>
          <button
            onClick={() =>
              this.writeUserData(
                this.props.userId,
                'Alex',
                this.props.userId,
                'url/photo',
                document.getElementsByClassName('messages-wrap__input')[0].value ? document.getElementsByClassName('messages-wrap__input')[0].value : '',
                'Вчера 19:34'
              )
            }
          >
            Отправить
          </button>
        </form>
      </div>
    )
  }
}

export default Messages;