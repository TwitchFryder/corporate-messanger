import React from 'react'
import '../common/index.sass'
import '../common/variables.sass'
import '../../assets/fonts/index.sass'
import MainMenu from '../blocks/main-menu/index'
import Chat from '../layouts/chat/index'

class App extends React.Component {
  render () {
    return (
     <>
       <div className="content-wrapper">
        <MainMenu userName={this.props.userName} avatar={this.props.avatar}/>
        <Chat userId={this.props.userId}/>
       </div>
     </>
    )
  }
}

export default App;