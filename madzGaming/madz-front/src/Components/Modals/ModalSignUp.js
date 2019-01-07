import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';

import FormSignUp from '../Forms/FormSignUp.js';


class ModalSignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  toggleModalForm = () =>{
    if(this.props.PropsModalIsOpen.ModalSignUp.boolean){
      this.props.ModalIsOpen();
    }
  }

  render() {

    return (
      <Container>
        <Modal isOpen={this.props.PropsModalIsOpen.ModalSignUp.boolean}>
          <ModalBody>
            <FormSignUp />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => this.toggleModalForm()}>Close</Button>{' '}
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}



function mapDispatchToProps(dispatch) {
  return {
    ModalIsOpen: function() {
        dispatch( {type: 'CloseModalSignUp', boolean: false} )
    }
  }
}

function mapStateToProps(state) {
  return { PropsModalIsOpen: state }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalSignUp);
