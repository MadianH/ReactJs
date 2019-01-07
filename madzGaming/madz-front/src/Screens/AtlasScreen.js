import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';


class AtlasScreen  extends Component {
  render() {

    return (
      <div id="AtlasScreen-container" className="Background-main">

        <div className="container">
          <div className="row">
            <h1 className="text-center col-12">Atlas</h1>
          </div>
        </div>

      </div>
    );
  }
}

export default AtlasScreen;
