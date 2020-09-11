import React, { Component } from "react";
import PropTypes from "prop-types";

export default class B extends Component {
  static childContextTypes = {
    name: PropTypes.string,
  };
  getChildContext() {
    return {
      name: "Benzolas",
    };
  }
  render() {
    return this.props.children;
  }
}
