import React from 'react'
import './common/index.sass'
import './common/variables.sass'
import '../assets/fonts/index.sass'
import Home from './Home/Home.js'
import Auth from './Auth/Auth.js'
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
        console.log('usrBack', user);
        // console.log('usrFront', this.state.user.displayName);
        
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }

  render () { 
    return (
     <>
      {!this.state.user ?  (<Auth />) : (<Home userName={this.state.user.displayName} avatar={this.state.user.photoURL}/>)}
     </>
    )
  }
}

export default App;