import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';
import Landing from './components/landing';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Landing} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
