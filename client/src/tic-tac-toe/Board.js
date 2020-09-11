import React, { Component } from "react";
import BoardmapButton from "./BoardmapButton";
import Button from "./Button";

export default class Board extends Component {
  constructor(props) {
    super(props);
    console.log("hi");
    this.state = {
      squaresHistory: [],
      squares: [],
    };
  }
  createSquare = (number) => {
    return (
      <Button
        key={number}
        onClick={() => this.updateSquare(number)}
        value={this.state.squares[number]}
        isActive={this.handleBoxClass(number, this.state.winner)}
      />
    );
  };
  createMapButton = (number) => {
    return (
      <BoardmapButton
        key={number}
        position={number}
        onClick={() => this.updateSquareHistory(number)}
      />
    );
  };

  handleBoxClass(box_id, boxes) {
    if (!boxes) return "normal";
    return boxes.includes(box_id) ? "active" : "normal";
  }

  componentDidMount(props, state) {
    console.log("component mount");

    this.setState({
      squares: Array(9).fill(null),
      squaresHistory: [],
      oisnext: false,
    });
  }
  updateSquare = async (index) => {
    const squares = [...this.state.squares];

    if (squares[index] || this.checkWinner(squares)) return;
    const { oisnext, squaresHistory } = this.state;
    console.log(squaresHistory, "squarehis");
    squares[index] = oisnext ? "o" : "x";
    const winner = this.checkWinner(squares);
    this.setState((state, props) => {
      return {
        squares,
        oisnext: !oisnext,
        winner,
        squaresHistory: [...squaresHistory, [...squares]],
      };
    });
  };
  updateSquareHistory = (slice_point) => {
    if (!slice_point) {
      this.setState({
        squaresHistory: [],
        squares: Array(9).fill(null),
        oisnext: false,
        winner: undefined,
      });
      return;
    }
    const { squaresHistory } = this.state;
    const history = squaresHistory.map((e) => e).slice(0, slice_point),
      squares = history[history.length - 1];
    let oisnext = history.length % 2 === 0 ? false : true;
    this.setState({
      squaresHistory: history,
      squares,
      oisnext,
      winner: this.checkWinner(squares),
    });
  };
  checkWinner = (squares) => {
    const wins = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [6, 4, 2],
    ];
    const winner = wins.find(([a, b, c], i) => {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[b] === squares[c]
      ) {
        return [a, b, c];
      }
    });
    console.log(winner, "winner");

    return winner;
  };
  componentDidUpdate() {
    console.log("updated");
  }
  style = {
    margin: "auto",
    display: "'inline-block'",
    width: 300,
    padding: 5,
    background: "#f0f0f0",
    borderRadius: 5,
    marginTop: 50,
    boxShadow: "-2px -2px 5px #fff ,2px 2px 5px rgba(0,0,0,.2) ",
    position: "relative",
  };
  render() {
    let { squares, squaresHistory } = this.state;
    return (
      <div style={this.style}>
        <h1
          style={{
            textAlign: "center",
            color: "#666",
            boxShadow: "-1px -2px 5px #fff ,1px 1px 5px rgba(0,0,0,.4) ",
            borderRadius: 5,
            padding: 20,
            backgroundColor: "#f7f7f7",
          }}
        >
          {this.state.oisnext ? "o" : "x"} is next
        </h1>
        <div>{squares.map((e, i) => this.createSquare(i))}</div>
        {squaresHistory.length ? (
          <div className="minimap">
            {squaresHistory.length
              ? squaresHistory.map((e, i) => this.createMapButton(i))
              : ""}
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}
