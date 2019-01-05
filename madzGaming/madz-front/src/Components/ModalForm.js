import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false
    };
  }

  componentDidUpdate(prevProps){
    if (this.props.PropsModalIsOpen.boolean!==this.state.modalIsOpen) {
      this.setState({
        modalIsOpen: !this.state.modalIsOpen
      })
    }
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }


  render() {
    console.log("props",this.props.PropsModalIsOpen.boolean);
    console.log("state", this.state.modalIsOpen);
    return (
      <Container>
        <Button onClick={this.toggle}>Modal</Button>
        <Modal isOpen={this.state.modalIsOpen} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>

          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return { PropsModalIsOpen: state.ModalFormReducer }
}

export default connect(
    mapStateToProps,
    null
)(ModalPage);
