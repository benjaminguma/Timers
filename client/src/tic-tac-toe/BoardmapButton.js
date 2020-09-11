import React, { useState } from "react";

export default function BoardmapButton({ position, onClick }) {
  const style = {
    width: "100%",
    fontSize: 13,
    fontWeight: 500,
    fontFamily: "inherit",
    backgroundColor: "#fff",
    border: "none",
    borderRadius: 5,
    boxShadow: "-1px -1px 4px #fff , 1px 1px 5px rgba(0,0,0,.1)",
    color: "#666",
    textTransform: "uppercase",
  };
  return (
    <button onClick={onClick} style={style}>
      go to point #{position}
    </button>
  );
}
