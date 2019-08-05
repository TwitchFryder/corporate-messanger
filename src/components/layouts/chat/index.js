import React from 'react'
import './index.sass'
import Dialogs from './dialogs-list';
import Messages from './messages-list';

class Chat extends React.Component {
  render() {
    return (
      <div className="chat container">
        <Dialogs />
        <Messages userId={this.props.userId}/>
      </div>
    )
  }
}

export default Chat;