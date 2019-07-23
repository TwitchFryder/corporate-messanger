import React from 'react'
import './components/blocks/common/index.sass'
import MainMenu from './components/blocks/main-menu/index'

class App extends React.Component {
  render () {
    return (
     <div>
       <div className="content-wrapper">
        <MainMenu />
       </div>
     </div>
    )
  }
}

export default App;