import React from 'react';
import { Container, Button, Modal, ModalBody, ModalHeader, ModalFooter } from 'mdbreact';
import {connect} from 'react-redux';


class ModalPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
   this.handleChange = this.handleChange.bind(this);
   this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggleModalForm = () =>{
    if(this.props.PropsModalIsOpen.ModalFormReducer.boolean){
      this.props.ModalIsOpen();
    }
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log("value",this.state.value);
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }


  render() {

    return (
      <Container>
        <Modal isOpen={this.props.PropsModalIsOpen.ModalFormReducer.boolean}>
          <ModalBody>
            <form onSubmit={this.handleSubmit}>
              <label>
                <div className="Font-color-black">Email:</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <label>
                <div className="Font-color-black">Password:</div>
                <input type="text" value={this.state.value} onChange={this.handleChange} />
              </label>
              <input type="submit" value="Submit" />
           </form>
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
        dispatch( {type: 'CloseModal', boolean: false} )
    }
  }
}

function mapStateToProps(state) {
  return { PropsModalIsOpen: state }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ModalPage);
