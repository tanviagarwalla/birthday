import React, { Component } from 'react';
import './App.css';
import NickFury from './components/NickFury.jsx';
import Welcome from './components/Welcome.jsx';
import 'semantic-ui-css/semantic.min.css';
import video from './media/Background_08.mov';
import Intro from './components/Intro'
import ProgressBar from './components/Progress'
import { Grid } from 'semantic-ui-react'
import Challenge from './components/Challenge'
import './vov.min.css';
import Stats from './components/Stats'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ready: false, introIndex : 0, showProgressBar: false, progress: 0, showVideo: false, bgColor: 'white', challengeIndex : 0, hideChallengeButtons: false};
  }
  
  handleReady = () => {
    this.setState({ready: true, showIntro: true});
  }

  handleIntroClicks = () => {
    let index = this.state.introIndex;
    if( index === 2) {
      this.setState({showProgressBar: true, progress: 50, introIndex: index + 1});
    } else if (index === 4) {
      this.setBackgroundColor('black');
      this.setState({showIntro: false, progress: 0});
    } else {
      this.setState({introIndex: index + 1});
    }
  }

  handleChallengeComplete = () => {
    let index = this.state.challengeIndex;
    let progress = this.state.progress;
    if (index  < 3) {
      this.setState({challengeIndex : index + 1, progress : progress + 25});
    } else {
      this.setState({challengeIndex : index + 1, hideChallengeButtons : true, progress : progress + 25})
    }
  }

  setBackgroundColor = (color) => {
    this.setState({bgColor: 'gradient1'});
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row only="mobile tablet">
            <h2 className="mobile">This website is only meant to be used on computer screens. Responsive design is a feature enhancement we are considering for future releases. Thank you for your patience!</h2>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row only="computer" className={this.state.bgColor}>
          <div className="body">
            {/* Welcome message */}
            {!this.state.ready && <Welcome handleClick={this.handleReady}/>}

            {/* Video background */}
            {this.state.showIntro && <video playsInline autoPlay muted loop id="bgvid" src={video}/>}

            {this.state.ready && <Grid columns="equal">
              {this.state.showIntro && <Grid.Row centered>
                 <Intro index={this.state.introIndex} clickHandler={this.handleIntroClicks} />
                
              </Grid.Row>}
              {!this.state.showIntro && <Grid.Row>
                <Challenge index={this.state.challengeIndex} clickHandler = {this.handleChallengeComplete} hideButtons = {this.state.hideChallengeButtons} />
              </Grid.Row>}
              <Grid.Row>
                {!this.state.showIntro && this.state.ready && <div className="stats-bar">
                  <Stats/>
                </div>}
                <Grid.Column>
                  {/* Nick Fury */}
                    <div className="vov fade-in">
                      <NickFury/>
                    </div>
                </Grid.Column>
                <Grid.Column>
                  {this.state.showProgressBar && <div className="vov slide-in-up"><ProgressBar progress={this.state.progress}/></div>}
                </Grid.Column>
              </Grid.Row>
            </Grid>}
          </div>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
