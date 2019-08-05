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
    console.log(this.state.user);
    
    // userId={this.state.user.providerData[0].uid} 
  }

  getUser(name,avatar) {
    this.setState(state => ({...state, user: {displayName: name, photoURL: avatar }}))
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
      {!this.state.user ?  (<Auth getUser={this.getUser} />) : (<Home userName={this.state.user.email} avatar={this.state.user.photoURL}/>)}
     </>
    )
  }
}

export default App;