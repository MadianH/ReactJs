import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import Plateau from './Components/Plateau.js'

import ReducPlateau from './Reducers/Plateau.reduceur';

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({ReducPlateau}));



class App extends Component {

  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Plateau />
        </div>
      </Provider>
    );
  }
}

export default App;
