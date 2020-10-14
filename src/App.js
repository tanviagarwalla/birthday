import React, { Component } from 'react';
import './App.css';
import NickFury from './components/NickFury.jsx';
import Welcome from './components/Welcome.jsx';
import 'semantic-ui-css/semantic.min.css';
import video from './media/Background_08.mov';
import Intro from './components/Intro'
import ProgressBar from './components/Progress'
import { Grid } from 'semantic-ui-react'
import './vov.min.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {ready: false, introIndex : 0, showProgressBar: false, progress: 0};
  }
  
  handleReady = () => {
    this.setState({ready: true});
    this.setState({showIntro: true});
  }

  handleIntroClicks = () => {
    let index = this.state.introIndex;
    if( index === 2) {
      this.setState({showProgressBar: true, progress: 50, introIndex: index + 1});
    } else if (index === 4) {

    } else {
      this.setState({introIndex: index + 1});
    }
  }

  render() {
    return (
      <div>
        <Grid>
          <Grid.Row only="computer tablet">
          <div className="body" style={{height:'100vh', width:'100vw'}}>
            {/* Welcome message */}
            {!this.state.ready && <Welcome handleClick={this.handleReady}/>}
            {/* Video background */}
            {this.state.ready && <video playsInline autoPlay muted loop id="bgvid" src={video}/>}

            {this.state.ready && <Grid columns="equal">
              <Grid.Row centered>
              {this.state.showIntro && <Intro index={this.state.introIndex} clickHandler={this.handleIntroClicks} />}
              </Grid.Row>
              <Grid.Row>
                <Grid.Column>
                  {/* Nick Fury */}
                  {this.state.ready && <div className="vov fade-in">
                    <NickFury/>
                    </div>}
                </Grid.Column>
                <Grid.Column>
                  {this.state.showProgressBar && <div className="vov slide-in-up"><ProgressBar progress={this.state.progress}/></div>}
                </Grid.Column>
              </Grid.Row>
            </Grid>}
          </div>
          </Grid.Row>
        </Grid>
        <Grid>
          <Grid.Row only="mobile">
            <h2 style={{margin: '20px'}}>This website is only meant to be used on computer screens. At worst, tablets</h2>
          </Grid.Row>
        </Grid>
      </div>
    );
  }
}

export default App;
