import React from "react";
import Typed from 'typed.js';
import { Button } from 'semantic-ui-react'
import '../App.css';

class Welcome extends React.Component {
  componentDidMount() {
    const options = {
      strings: ['Hello Swetik Sheth', "You have 1 confidential message(s) waiting"],
      startDelay: 500,
      typeSpeed: 100,
      backSpeed: 80,
      cursorChar: "|",
    };
    // this.el refers to the <span> in the render() method
    this.typed = new Typed(this.el, options);
  }
componentWillUnmount() {
    // Please don't forget to cleanup animation layer
    this.typed.destroy();
  }
  
  render() {
    return (
        <div className="wrap center" style={{fontSize: "50px", height: "100vh"}}>
          <div className="type-wrap">
            <span
                style={{ whiteSpace: 'pre' }}
                ref={(el) => { this.el = el; }}
            />
          </div>
          <div className="welcome-buttons">
            <span className="welcome-buttons">
              <Button basic color='black' onClick={this.props.handleClick}>Proceed</Button>
            </span>
          </div>   
        </div>
    );
  }
}
export default Welcome;