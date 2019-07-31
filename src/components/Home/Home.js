import React from 'react'
import '../common/index.sass'
import '../common/variables.sass'
import '../../assets/fonts/index.sass'
import MainMenu from '../blocks/main-menu/index'
import Chat from '../layouts/chat/index'

class App extends React.Component {
  log
  render () {
    console.log(this.props.userName);
    
    return (
     <>
       <div className="content-wrapper">
        <MainMenu userName={this.props.userName} avatar={this.props.avatar}/>
        <Chat />
       </div>
     </>
    )
  }
}

export default App;