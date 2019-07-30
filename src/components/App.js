import React from 'react'
import './common/index.sass'
import './common/variables.sass'
import '../assets/fonts/index.sass'
import MainMenu from './blocks/main-menu/index'
import Chat from './layouts/chat/index'

class App extends React.Component {
  render () {
    return (
     <div>
       <div className="content-wrapper">
        <MainMenu />
        <Chat />
       </div>
     </div>
    )
  }
}

export default App;