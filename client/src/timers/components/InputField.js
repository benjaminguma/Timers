import React, { Component } from "react";
import warning from "../images/warning.svg";
import { motion, AnimatePresence } from "framer-motion";

const variant = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
  },
  exit: {
    opacity: 0,
    scale: 1.4,
  },
};
export default class InputField extends Component {
  handleRemaining = () => {
    const { length, value } = this.props;
    let remainingText = length - value.length;

    return (
      <AnimatePresence>
        {remainingText <= 10 && value !== "" ? (
          <motion.div
            variants={variant}
            initial="initial"
            animate="animate"
            exit="exit"
            key={2}
            className="error count"
          >
            <p> {remainingText}</p>
          </motion.div>
        ) : null}
      </AnimatePresence>
    );
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
