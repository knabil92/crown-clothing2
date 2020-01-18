import React, {Component} from 'react';
import './App.css';
import {HomePage} from './pages/homepage/homepage.comonent'
import {Route, Switch} from 'react-router-dom'

const HatPage = () => (
  <h1>HATssssss</h1>
)


class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path='/' component={HomePage}/>
          <Route exact path='/hats' component={HatPage}/>
        </Switch>
      </div>
    );
  }
}

export default App;
