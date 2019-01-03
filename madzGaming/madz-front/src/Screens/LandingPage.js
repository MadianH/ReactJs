import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import '../App.css';
import CardLanding from '../Components/CardLanding.js'
import Margin from '../Components/Margin.js'

import AtlasLogo from '../img/atlas-logo.jpg';
import FortniteLogo from '../img/fortnite-logo.jpg';

const dataCardLanding = [
{name:"Fortnite",background:FortniteLogo, link:"/Fortnite"},
{name:"Atlas",background:AtlasLogo, link:"/Atlas"},
]

let dataCardLandingList = dataCardLanding.map(function(map){
  return <CardLanding name={map.name} background={map.background} link={map.link} />
})

class LandingPage  extends Component {
  render() {
    return (
      <div id="LandingContainer" className="Background-landing Font-color-white">
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Margin size="Margin-xxl" />
              <h1 className="text-center Margin-null">Bienvenue sur Madz Gaming</h1>
              <Margin size="Margin-xxs" />
              <h6 className="text-center Margin-null">Participe à des <strong>Tournois</strong>, Monte ta <strong>Team</strong>, <strong>Recrute</strong> des joueurs</h6>
              <Margin size="Margin-xxl" />
              <h4 className="text-center">Choisis ton jeu :</h4>
            </div>
            <Margin size="Margin-xxl" />
            <div id="CardContainer" className="col-12 row">
              {dataCardLandingList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage ;
