import React, {Component} from 'react';
import {BrowserRouter as Link} from 'react-router-dom';
import '../App.css';

class Button extends Component {

  
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
              <button type={this.props.type} className={this.props.className} onClick={() => this.props.handleClick(this.props.index)}>{this.props.content}</button>
            )
        }
      </div>
   );
  }
}

export default Button;
