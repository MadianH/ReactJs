import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import Landing from './Components/Landing';
import Board from './Components/Board';

import Players from './Reduceurs/Players.reduceur';
import CurrentPlayer from './Reduceurs/CurrentPlayer.reduceur';
import Dice from './Reduceurs/Dice.reduceur';

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';
const store = createStore(combineReducers({Players, CurrentPlayer, Dice}))

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <Route exact path="/" component={Landing}></Route>
          <Route exact path="/Board" component={Board}></Route>
        </Provider>
      </Router>
    );
  }
}

export default App;
