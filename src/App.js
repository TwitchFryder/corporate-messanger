import React from 'react'
import './components/common/index.sass'
import './components/common/variables.sass'
import './assets/fonts/index.sass'
import MainMenu from './components/blocks/main-menu/index'
import Chat from './components/layouts/chat/index'

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