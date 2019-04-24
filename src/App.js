import React, { Component } from 'react';
import About from './routes/about/index';
import Users from './routes/users/index';
import signup from './routes/users/signup';
import success from './routes/users/success';
import { Route, Switch } from 'react-router-dom';
import './App.css';

class App extends Component {
  render() {
    return (
      <Switch>
        
        <Route exact path="/" component={About} />
        <Route path='/about' component={About} />
        <Route path='/users' component={Users} />
        <Route path='/signup' component={signup} />
        <Route path='/success' component={success} />
      </Switch>
    );
  }
}

export default App;
