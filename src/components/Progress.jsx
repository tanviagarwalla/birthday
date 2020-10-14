import React, { Component } from 'react'
import { Progress } from 'semantic-ui-react'
import '../App.css';

export default class ProgressBar extends Component {

  increment = () =>
    this.setState((prevState) => ({
      percent: prevState.percent >= 100 ? 0 : prevState.percent + 20,
    }))

  render() {
    return (
      <div className="progress-bar">
        <Progress percent={this.props.progress} progress indicating size="large" />
      </div>
    )
  }
}