import React from "react";
import { Button } from 'semantic-ui-react'
import '../App.css';
import '../vov.min.css';

class Intro extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            messageList : [<p>Hi Agent Sheth, <br/><br/> I'm Nick Fury and I need your help. </p> , 
            <p>The Avengers are busy fighting bigger battles in Space and I need your help saving Earth. <br/><br/> Will you help me by completing a few challenges?</p>, 
            <p>Saving lives is a dangerous business.<br/><br/> Are you sure you want to do this?</p>,
            <p>You can track your progress with the progress bar at the bottom of the screen. </p>,
            <p> Don't worry, you will be rewarded for your efforts. <br/><br/> Let's begin. </p>],
            buttonLabels : ['I want to help', 'Yes!', "YES", "Got it.", "Start"]
        };
    }
    
    render() {
        return (
            <div className="wrap center vov fade-in" style={{fontSize: "25px", height: "80vh", position: "relative", opacity: '0.85'}}>
                <div style={{'background-color': 'black', 'text-align': 'left', color: 'green', height: '400px', width: '650px', border: 'solid grey 10px','border-radius': '25px', padding: '40px'}}>
                    <div style={{height: '80%'}}>
                        {this.state.messageList[this.props.index]}
                    </div>
                    <div> 
                        <Button basic color='green' onClick={this.props.clickHandler}>{this.state.buttonLabels[this.props.index]}</Button>
                    </div>  
                </div> 
            </div>
        );
    }
}
export default Intro;