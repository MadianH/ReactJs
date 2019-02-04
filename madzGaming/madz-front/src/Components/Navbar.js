import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import ModalSign from '../Components/Modals/ModalSign.js'

class NavbarPage extends React.Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () =>{
    this.setState({ isOpen: !this.state.isOpen });
  }

  toggleModalForm = () =>{
    if(!this.props.PropsModalIsOpen.boolean){
      this.props.ModalIsOpen();
    }
  }


  render() {

    return (
      <Navbar color="default-color" dark expand="md" style={{marginTop: "20px"}}>
          <NavbarBrand>
            <strong className="white-text">Madz Gaming</strong>
          </NavbarBrand>
          <NavbarToggler
            onClick={() => this.toggleCollapse()}
          />
          <Collapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
            <NavbarNav left>
              <NavItem active>
                <NavLink to="/Fortnite">Mon profil</NavLink>
              </NavItem>
              <NavItem>
              </NavItem>
              <NavItem>
                <Dropdown>
                  <DropdownToggle  nav caret>
                    <div className="d-md-inline">Jeu</div>
                  </DropdownToggle>
                  <DropdownMenu className="dropdown-default"right>
                    <DropdownItem><Link className="btn" to="/Fortnite">Fortnite</Link></DropdownItem>
                    <DropdownItem><Link className="btn" to="/Atlas">Atlas</Link></DropdownItem>
                  </DropdownMenu>
                </Dropdown>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem>
              <ModalSign/>
                <div className="NavBar-btn-connection" onClick={() => this.toggleModalForm()}>Connection</div>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

const mapStateToProps = (state) => {
  console.log("reduc",state);
  return { PropsModalIsOpen: state.ModalSignIn }
}

const mapDispatchToProps = (dispatch) => {
  return {
    ModalIsOpen: function() {
        dispatch( {type: 'OpenModalSignIn', boolean: true} )
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarPage);
