import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LandingPage from './Screens/LandingPage';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
