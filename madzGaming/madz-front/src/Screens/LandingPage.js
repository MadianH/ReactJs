import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import CardLanding from '../Components/CardLanding.js'

import AtlasLogo from '../img/atlas-logo.jpg';
import FortniteLogo from '../img/fortnite-logo.jpg';

const dataCardLanding = [
{name:"Atlas",background:AtlasLogo},
{name:"Fortnite",background:FortniteLogo},
]

let dataCardLandingList = dataCardLanding.map(function(map){
  return <CardLanding name={map.name} background={map.background} />
})

class LandingPage  extends Component {
  render() {
    return (
      <div id="LandingContainer" className="container Background-white">

        <div className="row">
          <div className="col-12">
            <h1 className="text-center Margin-null">Bienvenue sur Madz Gaming</h1>
            <h4 className="text-center">Choisis ton jeu :</h4>
          </div>
          <div id="CardContainer">
            {dataCardLandingList}
          </div>
        </div>

      </div>
    );
  }
}

export default LandingPage ;
