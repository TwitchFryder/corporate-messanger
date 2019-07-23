import React from 'react'
import './index.sass'
import Dialogs from './dialogs-list';
import Messages from './messages-list';

class Chat extends React.Component {
  render() {
    return (
      <div className="chat container">
        <Dialogs />
        <Messages />
      </div>
    )
  }
}

export default Chat;