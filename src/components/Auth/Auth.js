import React, { Component } from 'react';
import './index.sass';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Login from './Login/Login';
import Signup from './Signup/Signup';

class Auth extends Component {
  
  render() {
    return (
      <> 
      <div className="main">
        <div className="main__wrapper">
          <div className="form-wrapper">
            <Tabs>
              <TabList className="form__tabs">
                <Tab className="form__tab form__tab--active">Авторизация</Tab>
                <Tab className="form__tab">Регистрация</Tab>
              </TabList>
              <TabPanel>
                <Login />
              </TabPanel>
              <TabPanel>
                <Signup />
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </>
    )
  }
}
export default Auth;