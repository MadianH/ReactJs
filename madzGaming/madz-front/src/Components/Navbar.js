import React from "react";
import { Navbar, NavbarBrand, NavbarNav, NavItem, NavLink, NavbarToggler, Collapse, FormInline, Dropdown, DropdownToggle, DropdownMenu,  DropdownItem, Fa } from "mdbreact";
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';

import ModalForm, {FormPage} from '../Components/Modals/ModalForm.js'

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
              <ModalForm />
                <div onClick={() => this.toggleModalForm()}>Connexion</div>
              </NavItem>
            </NavbarNav>
          </Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps(state) {
  return { PropsModalIsOpen: state.ModalFormReducer }
}

function mapDispatchToProps(dispatch) {
  return {
    ModalIsOpen: function() {
        dispatch( {type: 'OpenModal', boolean: true} )
    }
  }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavbarPage);
