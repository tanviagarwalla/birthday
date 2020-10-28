import React from "react";
import { Button, Grid, Popup } from 'semantic-ui-react'
import '../App.css';
import '../vov.min.css';
import Profile from './Profile.jsx'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'

class Challenge extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            messageList : [
                <p className="challenge-description">
                    Time to get fit! <br/><br/>
                    As an Avenger, your super powers are not enough.<br/><br/>
                    You need to train to increase your strength, flexibility and stamina. <br/><br/>
                    Attempt the handstand challenge and send video proof to Agent Agarwalla.
                </p> , 
                <p className="challenge-description">
                    Well done on the first challenge!<br/><br/> 
                    As an Avenger, you are not only expected to save the world but also entertain it. <br/> <br/>
                    To prove that you can hold the attention of the masses make a recording of yourself doing the Gangnam Style dance. <br/><br/>
                    Send a video recording to Agent Agarwalla.
                </p>, 
                <p className="challenge-description">
                    That was not your best performance so I hope you will do better in the next few challenges.<br/><br/> 
                    As an Avenger,  you must have brain with brawn. <br/><br/>
                    List your ten favorite people in the world in order. Be smart and cautious while creating this list. <br/><br/>
                    Send the list to Agent Agarwalla.
                </p>, 
                <p className="challenge-description">
                    Finally, your last challenge.<br/><br/> 
                    As an Avenger, it is not only important to be brave and smart but also to be able to love and empathize.<br/><br/>
                    Write a Haiku for your one true love. <br/><br/>
                    Send it to Agent Agarwalla for verification.
                </p>,
                <p className="challenge-description">
                    Welcome to the Avengers. <br/> <br/>
                    We're all very excited to have you join the team. <br/><br/>
                    Please contact Agent Agarwalla for the next steps. <br/><br/>
                    I hope we're not wrong about you.
                </p>
            ],
            subheader : ['Fitness', 'Entertainment', "Intelligence Quotient", "Emotional Quotient"],
            header: ["Challenge 1", "Challenge 2", "Challenge 3", "Challenge 4", "Congratulations!"]
        };
    }

    renderTime = ({ remainingTime }) => {  
        
        const minutes = Math.floor(remainingTime / 60);
        const seconds = remainingTime % 60;
        return (
            <div className="timer">
                <div className="value">{`${minutes}:${seconds}`}</div>
            </div>
        );
      };
    
    render() {
        return (
            <div className="challenge-container vov fade-in" style={{width: '100%'}}>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={5}>
                            <Profile></Profile>
                        </Grid.Column>
                        <Grid.Column width={7}>
                            <div className="challenge-holder">
                                <h1 className="ui header" style={{color: '#e07a5f'}}>
                                    {this.state.header[this.props.index]}
                                    <div class="sub header">{this.state.subheader[this.props.index]}</div>
                                </h1>
                                {this.state.messageList[this.props.index]}
                                { !this.props.hideButtons  && <div className="challenge-buttons">
                                    <Button basic color='green' onClick={this.props.clickHandler}>
                                        Challenge Complete
                                    </Button>
                                    <Popup 
                                    content="Sorry, that's not allowed." 
                                    trigger={
                                        <Button basic color='red'>
                                            I give up
                                        </Button>
                                    } />
                                </div>}
                            </div>
                        </Grid.Column>
                        <Grid.Column width={4}>
                            <div className="center timer-wrapper">
                                <h3 className="time-remaining"> Time Remaining </h3>
                                <CountdownCircleTimer
                                    onComplete={() => {
                                    // do your stuff here
                                    return [true, 1500] // repeat animation in 1.5 seconds
                                    }}
                                    isPlaying
                                    duration={3600}
                                    colors="#A30000"
                                >
                                    {this.renderTime}
                                </CountdownCircleTimer>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>
        );
    }
}
export default Challenge;