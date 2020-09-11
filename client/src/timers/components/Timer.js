import React, { Component } from "react";
import wave2 from "../images/wave2.svg";
// component
import TimerStart_Stop from "./TimerStart_Stop";
//utils
import helpers from "../utils/utils";
export default class Timer extends Component {
  componentDidMount() {
    console.log(this.props.elapsed);
    this.runTimer = setInterval(() => {
      this.forceUpdate();
    }, 60);
  }
  componentWillUnmount() {
    clearInterval(this.runTimer);
  }
  render() {
    const {
      id,
      title,
      project,
      del,
      toogleTimer,
      elapsed,
      starttimer,
      stoptimer,
      runningSince,
    } = this.props;
    let time = helpers.TimerHuman({ runningSince, elapsed });
    return (
      <div className="col">
        <div className="timer">
          <div className="timer-head u-center">
            <h1 className="timer-head_heading">{title}</h1>
            <h2>{project}</h2>
            <svg className="timer-head_img">
              <use xlinkHref={wave2 + "#wave2"}></use>
            </svg>
          </div>
          <div className="timer-body u-center">
            <div className="timer-time">
              <span>{time} </span>
            </div>
            <ul className="timer-controls">
              <li>
                <button
                  onClick={toogleTimer}
                  className="fas fa-pen-alt"
                ></button>
              </li>
              <li>
                <button onClick={del} className="fas fa-trash-alt"></button>
              </li>
            </ul>
            <TimerStart_Stop
              id={id}
              starttimer={starttimer}
              stoptimer={stoptimer}
              runningSince={!!runningSince}
            />
          </div>
        </div>
      </div>
    );
  }
}
