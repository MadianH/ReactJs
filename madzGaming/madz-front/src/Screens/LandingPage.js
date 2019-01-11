import React, { Component } from 'react';
import '../App.css';

import CardLanding from '../Components/Cards/CardLanding.js';
import Margin from '../Components/Margin.js';
import Navbar from '../Components/Navbar.js';

import AtlasLogo from '../Images/atlas-logo.jpg';
import ArkLogo from '../Images/ark-logo.jpg'

const dataCardLanding = [
{key: 1, name:"Atlas", background:AtlasLogo, link:"/Atlas"},
{key: 2, name:"Ark", background:ArkLogo, link:"/Ark"},
]

let dataCardLandingList = dataCardLanding.map(function(map){
  return <CardLanding key={map.key} name={map.name} background={map.background} link={map.link} />
})

class LandingPage  extends Component {
  render() {
    return (
      <div id="LandingContainer" className="Background-landing Font-color-white Full-screen">
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-12">
              <Margin size="Margin-xxl" />
              <h1 className="text-center Margin-null">Bienvenue sur Madz Company</h1>
              <Margin size="Margin-xxs" />
              <h6 className="text-center Margin-null">Monte ta <strong>Guilde</strong>, <strong>Recrute</strong> des joueurs, <strong>Manage</strong> ton équipe, Monte ta <strong>Réputation</strong></h6>
              <Margin size="Margin-xxl" />
              <h4 className="text-center">Choisis ton jeu :</h4>
            </div>
            <Margin size="Margin-xxl" />
            <div id="CardContainer" className="col-12 row Flex-row Justify-content-center Align-items-center">
              {dataCardLandingList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LandingPage ;
