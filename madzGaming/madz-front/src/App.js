import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import LandingPage from './Screens/LandingPage';
import FortniteScreen from './Screens/FortniteScreen';
import AtlasScreen from './Screens/AtlasScreen';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={LandingPage}></Route>
          <Route exact path="/Fortnite" component={FortniteScreen}></Route>
          <Route exact path="/Atlas" component={AtlasScreen}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
