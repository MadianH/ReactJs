import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';


class FortniteScreen  extends Component {
  render() {

    return (
      <div id="FortniteScreen-container" className="Background-main-fortnite">

        <div className="container">
          <div className="row">
            <h1 className="text-center col-12">Fortnite</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default FortniteScreen;
