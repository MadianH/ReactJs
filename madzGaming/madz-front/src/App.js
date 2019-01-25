import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';

import LandingPage from './Screens/LandingPage';
import ArkScreen from './Screens/ArkScreen';
import AtlasScreen from './Screens/AtlasScreen';

import ModalSignIn from './Reducers/ModalSignIn.reducer';
import DataUser from './Reducers/DataUser.reducer';
import TabForm from './Reducers/TabForm.reducer';

import {Provider} from 'react-redux';
import {createStore, combineReducers}  from 'redux';

const store = createStore(combineReducers({ModalSignIn, TabForm, DataUser}));

class App extends Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <div>
            <Route exact path="/" component={LandingPage}></Route>
            <Route exact path="/Atlas" component={AtlasScreen}></Route>
            <Route exact path="/Ark" component={ArkScreen}></Route>
          </div>
        </Provider>
      </Router>
    );
  }
}

export default App;
