import React, { Component } from "react";
import EditableTimer from "./EditableTimer";
import { motion, AnimatePresence } from "framer-motion";

const animation = {
  initial: {
    scale: 0,
    opacity: 0,
  },
  animate: {
    scale: 1,
    opacity: 1,
  },

  exit: {
    opacity: 0,
  },
};
const anim = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.4,
    },
  },
};

export default class TimerList extends Component {
  createTimer = (timer) => (
    <AnimatePresence key={timer.id}>
      <motion.div
        key={timer.id}
        variants={animation}
        exit="exit"
        className="col"
      >
        <EditableTimer
          starttimer={this.props.starttimer}
          stoptimer={this.props.stoptimer}
          onupdate={this.props.onupdate}
          ondelete={this.props.ondelete}
          {...timer}
        />
      </motion.div>
    </AnimatePresence>
  );
  render() {
    const { timers } = this.props;

    return (
      <div>
        <h1 className="u-center main">Timersdashboard</h1>
        {!timers.length ? (
          <h2
            className="u-center timer-head_heading"
            style={{ color: "#3D82F0", transform: "translateY(10rem)" }}
          >
            {" "}
            loading
          </h2>
        ) : (
          <motion.div
            variants={anim}
            initial="initial"
            animate="animate"
            className="container"
          >
            {timers.map((e) => this.createTimer(e))}
          </motion.div>
        )}
      </div>
    );
  }
}
