import React, { Component } from "react";

export default class TimerStart_Stop extends Component {
  startTimer = () => {
    console.log(this.props);
    this.props.starttimer(this.props.id);
  };
  stopTimer = () => {
    console.log(this.props);
    this.props.stoptimer(this.props.id);
  };

  render() {
    let { runningSince } = this.props;
    if (runningSince) {
      return (
        <button onClick={this.stopTimer} className="timer-button  red">
          stop
        </button>
      );
    }
    return (
      <button onClick={this.startTimer} className="timer-button  green">
        start
      </button>
    );
  }
}
