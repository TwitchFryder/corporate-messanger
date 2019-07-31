import React from 'react'
import './common/index.sass'
import './common/variables.sass'
import '../assets/fonts/index.sass'
import Home from './Home/Home.js'
import Login from './Auth/Login.js'
import fire from '../config/Fire.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {

      },
    }
  }
  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render () { 
    return (
     <>
      {!this.state.user ?  (<Login />) : (<Home userName={this.state.user.displayName} avatar={this.state.user.photoURL}/>)}
     </>
    )
  }
}

export default App;