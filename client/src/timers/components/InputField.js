import React, { Component } from "react";
import warning from "../images/warning.svg";

export default class InputField extends Component {
  handleRemaining = () => {
    const { length, value } = this.props;
    let remainingText = length - value.length;
    if (remainingText <= 10 && value !== "") {
      console.log(remainingText, value);
      return (
        <div key={2} className="error count">
          <p> {remainingText}</p>
        </div>
      );
    }

    return null;
  };
  render() {
    const { value, id, length, onChange } = this.props;
    return (
      <div className="form-group u-center">
        <label htmlFor={id}>{id}</label>
        <input
          type="text"
          value={value}
          id={id}
          name={id}
          maxLength={length}
          required={true}
          onChange={(e) => onChange(e)}
        />
        {value.length === 0 && (
          <svg key={1} className="error" width="2rem" height="2rem">
            <use xlinkHref={warning + "#warning"}></use>
          </svg>
        )}
        {this.handleRemaining()}
      </div>
    );
  }
}
