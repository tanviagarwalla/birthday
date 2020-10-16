import React from "react";
import { Button, Grid } from 'semantic-ui-react'
import '../App.css';
import '../vov.min.css';
import Profile from './Profile.jsx'

class Challenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            messageList : [<p>Hi Agent Sheth, <br/><br/> I'm Nick Fury and I'm here to recruit you to join the Avengers. </p> , 
            <p>Hold up! It's not that easy. <br/><br/> You will first have to go through our rigorous Hero training program.</p>, 
            <p>Saving lives is a dangerous business.<br/><br/> Are you sure you want to do this?</p>,
            <p>You can track your progress with the progress bar at the bottom of the screen. </p>,
            <p> Don't worry, you will be rewarded for your efforts. <br/><br/> Let's begin. </p>],
            buttonLabels : ['Proceed', 'Okay', "YES", "Okay", "Start"]
        };
    }
    
    render() {
        return (
            <div className="challenge-container vov fade-in" style={{width: '100%'}}>
                <Grid>
                    <Grid.Row columns="equal">
                        <Grid.Column width={6}>
                            <Profile></Profile>
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <div>
                                hi
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default Challenge;