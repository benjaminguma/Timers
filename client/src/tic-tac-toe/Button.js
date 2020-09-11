import React, { Component } from "react";
import "../App.css";

export default class Button extends Component {
  style = {
    padding: "2rem",
    margin: "auto",
    width: "30%",
    height: "30%",
    boxSizing: "border-box",
    display: "inline-block",
    margin: 5,
    position: "relative",
    borderRadius: 5,
    boxShadow: "-1px -2px 5px #fff ,2px 2px 5px rgba(0,0,0,.4) ",
  };

  style2 = {
    position: "absolute",
    top: "50%",
    right: "50%",
    transform: "translate(50%,-50%)",
    fontSize: 50,
    color: "#f7f7f7",
    fontWeight: 300,
    transition: ".6s ease-in",
  };

  render() {
    return (
      <div
        style={this.style}
        onClick={this.props.onClick}
        className={this.props.isActive}
      >
        <span style={this.style2}>{this.props.value}</span>
      </div>
    );
  }
}
