import React from "react";
import { Button } from 'semantic-ui-react'
import '../App.css';
import '../vov.min.css';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageList : [<p>Agent Sheth, <br/><br/> I'm Nick Fury and I'm here to recruit you to join the Avengers. </p> , 
            <p>Hold up! It's not that easy. <br/><br/> You will first have to go through our rigorous Hero training program.</p>, 
            <p>Saving lives is a dangerous business.<br/><br/> Are you sure you want to do this?</p>,
            <p>You can track your progress with the progress bar at the bottom of the screen. </p>,
            <p> Don't worry, you will be rewarded for your efforts. <br/><br/> Let's begin. </p>],
            buttonLabels : ['Proceed', 'Okay', "YES", "Okay", "Start"]
        };
    }
    
    render() {
        return (
            <div className="intro center vov fade-in">
                <div className="intro-screen">
                    <div className="intro-message">
                        {this.state.messageList[this.props.index]}
                    </div>
                    <div> 
                        <Button className="intro-button" basic color='green' onClick={this.props.clickHandler}>{this.state.buttonLabels[this.props.index]}</Button>
                    </div>  
                </div>
            </div>
        );
    }
}
export default Intro;