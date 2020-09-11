import React from "react";
import PropTypes from "prop-types";

export default function C(props, context) {
  return <div>{context.name}</div>;
}
C.contextTypes = {
  name: PropTypes.string,
};
