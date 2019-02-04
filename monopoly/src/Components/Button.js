import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import '../App.css';

class Button extends Component {

  handleClick = () => {
    if(this.props.parent === "Landing") {
      this.props.handleClick(this.props.index)
    } else if(this.props.parent === "Form") {
      this.props.handleSubmit()
    } else if( this.props.parent === "Dice") {
      this.props.handleClick(2, 12)
    }
  }

  render() {

    return (
      <div>
        {
          this.props.link
            ? (
              <Link to={this.props.to}>
                <button type={this.props.type} content={this.props.value} className={this.props.className}></button>
              </Link>
            )
            : (
              <button type={this.props.type} className={this.props.className} onClick={() => this.handleClick()}>{this.props.content}</button>
            )
        }
      </div>
   );
  }
}

export default Button;
