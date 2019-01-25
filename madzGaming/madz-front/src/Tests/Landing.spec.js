import { expect } from 'chai'
import React from 'react'
import { shallow } from 'enzyme'

import LandingPage from '../Screens/LandingPage.js'
import Navbar from '../Components/Navbar.js'
import CardLanding from '../Components/Cards/CardLanding.js'

describe('<LandingPage />', () => {
  it('renders without crashing', () => {
    const wrapper = shallow(<LandingPage />)
    expect(wrapper).to.contain(<Navbar />)
    // expect(wrapper.find(<CardLanding />)).to.have.length(2)
    console.log(wrapper.find(<CardLanding />).length);
  })
})
