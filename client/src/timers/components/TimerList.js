import React, { Component } from "react";
import EditableTimer from "./EditableTimer";

export default class TimerList extends Component {
  createTimer = (timer) => (
    <EditableTimer
      key={timer.id}
      starttimer={this.props.starttimer}
      stoptimer={this.props.stoptimer}
      onupdate={this.props.onupdate}
      ondelete={this.props.ondelete}
      {...timer}
    />
  );
  render() {
    const { timers } = this.props;
    const editableTimers = timers.map((e) => this.createTimer(e));
    return (
      <div>
        <h1 className="u-center main">Timersdashboard</h1>
        <div className="container">{editableTimers}</div>
      </div>
    );
  }
}
