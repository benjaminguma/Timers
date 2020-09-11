import logo from "./logo.svg";
import "./App.css";
import React, { Component } from "react";
import PropTypes from "prop-types";

export default class App extends Component {
  constructor(rt) {
    super();
    console.log("con");
  }
  state = {
    count: 0,
    IsUpToTen: false
  };

  getButtoncolor = () => (this.state.count > 10 ? "green" : "red");
  componentDidMount(props, state) {
    console.log("didmount");
  }
  componentDidUpdate(props, state) {
    console.log(state);
    console.log("didupdate");
  }
  render() {
    let { count } = this.state;
    console.log("render");
    return (
      <div>
        <button
          style={{
            backgroundColor: this.getButtoncolor(),
            color: "white",
            padding: 10,
            border: 0
          }}
          onClick={() => this.setState({ count: ++count })}
        >
          increment
        </button>
        <br />
        <h2>{count}</h2>
      </div>
    );
  }
}
