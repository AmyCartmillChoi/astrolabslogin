import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from './login';
import signup from './signup';
import { isLoggedIn } from '../../helpers/authentication';
import Dashboard from '../dashboard';

class App extends Component {
  render() {
    return (
      <Switch>
        <Route path="/signup" component={signup} />
        <Route path="/login" component={Login} />
        <Route path="" render={
          (props) => {
            if (isLoggedIn()){
              return <Dashboard />
            }
            return <Login />
          }
        }/>
      </Switch>
    );
  }
}

export default App;
