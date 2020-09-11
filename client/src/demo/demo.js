import React, { Component } from "react";
import PropTypes from "prop-types";
import Fern from "./Fern";
const data = { name: "go", clas: "come" };
const Texti = React.createContext(data);

export default class Demo extends Component {
  state = {
    data,
  };
  render() {
    return (
      <Texti.Provider value={this.state.data}>
        <div>p</div>
        <Fern />
      </Texti.Provider>
    );
  }
}
export { Texti };
