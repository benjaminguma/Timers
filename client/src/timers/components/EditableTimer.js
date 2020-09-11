import React, { Component } from "react";
import Timer from "./Timer";
import TimerForm from "./TimerForm";

export default class EditableTimer extends Component {
  state = {
    showTimer: true,
  };
  handleDelete = () => {
    this.props.ondelete(this.props.id);
  };
  handleCancel = () => {
    this.setState({ showTimer: !this.state.showTimer });
  };
  // componentDidUpdate(props, state) {
  //   console.log(this.state, state);
  // }
  compon;

  render() {
    if (this.state.showTimer) {
      return (
        <Timer
          del={this.handleDelete}
          starttimer={this.props.starttimer}
          stoptimer={this.props.stoptimer}
          toogleTimer={this.handleCancel}
          {...this.props}
        />
      );
    } else {
      return (
        <div className="col">
          <TimerForm
            ondelete={this.props.ondelete}
            onupdate={this.props.onupdate}
            toogleTimer={this.handleCancel}
            {...this.props}
          />
        </div>
      );
    }
  }
}
