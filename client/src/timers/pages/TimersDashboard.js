import React, { Component } from "react";
import PropTypes from "prop-types";
//other modules
import uuid from "uuid";
//fonts and css files
import "./css/css/all.css";
import "../css/main.css";
//components
import Modal from "../components/Modal";
import Timerlist from "../components/TimerList";
//utilities
import helpers from "../utils/utils";
import client from "./serverutils/axios";

export default class TimersDashboard extends Component {
  state = {
    timers: [],
  };

  async componentDidMount() {
    // this.getem = setInterval((params) => {
    //   client.get_timers((res) => {
    //     this.setState({ timers: res.data });
    //   });
    // }, 5000);
    client.get_timers((res) => {
      console.log(res.data);
      this.setState({ timers: res.data });
    });
  }

  handleCreate = (timer) => {
    const newTimer = helpers.prepareTimerObject(timer);
    this.setState({ timers: [newTimer].concat(this.state.timers) });
    client.post_timer(newTimer);
  };

  handleUpdate = (timer) => {
    let { timers } = this.state;
    timers = timers.map((e) => {
      if (e.id === timer.id) {
        return Object.assign({}, e, { ...timer });
      }
      return e;
    });
    this.setState({ timers });
    client.patch_timer(timer);
  };

  handleDelete = (id) => {
    console.log("deleting");
    let { timers } = this.state;
    timers = timers.filter((e) => e.id !== id);
    this.setState({ timers });
    client.delete_timer(id);
  };

  handleStartTimer = (timer_id) => {
    let { timers } = this.state,
      date = new Date().getTime();
    timers = timers.map((e) => {
      if (e.id === timer_id) {
        return Object.assign({}, e, { runningSince: date });
      }

      return e;
    });
    this.setState({ timers });
  };
  handleStopTimer = (timer_id) => {
    let { timers } = this.state,
      date = new Date().getTime();
    timers = timers.map((e) => {
      if (e.id == timer_id) {
        let elapsed = date - e.runningSince + e.elapsed;
        return Object.assign({}, e, { elapsed, runningSince: null });
      }

      return e;
    });
    this.setState({ timers });
  };
  render() {
    return (
      <div>
        <Modal oncreate={this.handleCreate} />
        <Timerlist
          onupdate={this.handleUpdate}
          ondelete={this.handleDelete}
          starttimer={this.handleStartTimer}
          stoptimer={this.handleStopTimer}
          timers={this.state.timers}
        />
      </div>
    );
  }
}
