import React, { Component } from "react";
import plus from "../images/plus.svg";
//components
import Timerform from "./TimerForm";
export default class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <input id="modal-toog" type="checkbox" />
          <Timerform oncreate={this.props.oncreate} />
          <div className="overlay"></div>
          <label className="lab" htmlFor="modal-toog">
            <img src={plus} width="50%" height="50%" alt="alt" />
          </label>
        </div>
      </div>
    );
  }
}
