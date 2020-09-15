import React, { Component } from "react";

// components
import InputField from "./InputField";
// images
import wave from "../images/wave.svg";
import warning from "../images/warning.svg";
export default class TimerForm extends Component {
  state = {
    title: this.props.title || "",
    project: this.props.project || "",
  };

  handleSubmit = () => {
    if (Object.values(this.state).some((e) => e.trim().length < 3)) {
      return;
    }
    const { id, toogleTimer, onupdate } = this.props;
    onupdate({ id, ...this.state });
    toogleTimer();
  };

  handleCreate = () => {
    if (Object.values(this.state).some((e) => e.trim().length < 3)) {
      return;
    }
    let { title, project } = this.state;

    this.props.oncreate({ title: title.trim(), project: project.trim() });
  };

  handleInput = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };
  render() {
    const { title, id, project, toogleTimer } = this.props;
    const text = id ? "update" : "create";
    return (
      <>
        <div className="timerform">
          <div className="timerform-head u-center">
            <h1>{text} timer</h1>
            <svg className="timerform-head_img">
              <use xlinkHref={`${wave}#wave`}></use>
            </svg>
          </div>
          <div className="timerform-body u-center">
            <form action="/" method="get">
              <InputField
                type="text"
                id="title"
                value={this.state.title}
                length="25"
                onChange={this.handleInput}
              />
              <InputField
                type="text"
                id="project"
                length="25"
                value={this.state.project}
                onChange={this.handleInput}
              />
            </form>
          </div>
          <div className="timerform-controls">
            <button
              onClick={id ? this.handleSubmit : this.handleCreate}
              type="submit"
            >
              {text} <span className="fas fa-pen"></span>
            </button>
            {title && (
              <button onClick={toogleTimer}>
                cancel <span className="fas fa-times"></span>
              </button>
            )}
          </div>
        </div>
      </>
    );
  }
}
