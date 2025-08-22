import { Component } from "react";
import "../App.css";

class Calculator extends Component {
  state = {
    input: "",
    result: "",
  };

  handleClick = (value) => {
    const operators = ["/", "*", "-", "+"];
    let { input } = this.state;
    if (operators.includes(value)) {
      if (operators.includes(input[input.length - 1])) {
        input = input.slice(0, -1);
      }
    }
    this.setState({
      input: input + value,
    });
  };

  clear = () => {
    this.setState({ input: "", result: "" });
  };

  backspace = () => {
    this.setState({ input: this.state.input.slice(0, -1) });
  };

  calculate = () => {
    try {
      // evaluate expression safely
      const res = eval(this.state.input);
      this.setState({ result: res });
    } catch {
      this.setState({ result: "Error" });
    }
  };

  render() {
    const buttons = [
      "7",
      "8",
      "9",
      "/",
      "4",
      "5",
      "6",
      "*",
      "1",
      "2",
      "3",
      "-",
      "0",
      ".",
      "+",
    ];

    return (
      <div className="calc-container">
        <h1> Calculator</h1>
        <div className="calc-display">
          <div className="calc-input">{this.state.input || "0"}</div>
          <div className="calc-result">{this.state.result}</div>
        </div>
        <div className="calc-buttons">
          {buttons.map((btn, i) => (
            <button key={i} onClick={() => this.handleClick(btn)}>
              {btn}
            </button>
          ))}
          <button className="equal" onClick={this.calculate}>
            =
          </button>
          <button className="clear" onClick={this.clear}>
            C
          </button>
          <button className="back" onClick={this.backspace}>
            ⌫
          </button>
        </div>
      </div>
    );
  }
}

export default Calculator;
