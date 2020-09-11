import React, { Component } from "react";
import B from "./B";
import C from "./C";

export default class A extends Component {
  render() {
    return (
      <B>
        <C />
      </B>
    );
  }
}
