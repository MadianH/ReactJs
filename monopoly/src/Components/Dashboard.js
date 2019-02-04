import React, {Component} from 'react';
import '../App.css';

import Dice from './Dice'

class Dashboard extends Component {

  render() {

    return (
      <div>
       <Dice />
      </div>
   );
  }
}

export default Dashboard;
