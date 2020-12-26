import "./App.css";
import React, { Component } from "react";
import CalculaterTitle from "./components/calculaterTitle";
import OutputScreen from "./components/outputScreen";
import Button from "./components/button";
class App extends Component {
  constructor() {
    super();
    this.state = {
      question: "",
      answer: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;
    switch (value) {
      case "=": {
        if (this.state.question !== "") {
          let ans = "";
          try {
            ans = eval(this.state.question);
          } catch (err) {
            this.setState({ answer: "Math Error" });
          }

          if (ans === undefined) {
            this.setState({ answer: "Math Error" });
          } else {
            this.setState({ answer: ans, question: "" });
          }
          break;
        }
      }

      case "Clear": {
        this.setState({ question: "", answer: "" });
        break;
      }

      case "Delete": {
        let str = this.state.question;
        str = str.substr(0, str.length - 1);
        this.setState({ question: str });
        break;
      }

      default: {
        this.setState({ question: (this.state.question += value) });
      }
    }
  }

  render() {
    return (
      <div className="frame">
        <CalculaterTitle value={"Calculater"} />
        <div className="mainCalc">
          <OutputScreen
            question={this.state.question}
            answer={this.state.answer}
          />
          <div className="button-row">
            <Button label={"Clear"} handleClick={this.handleClick} />
            <Button label={"Delete"} handleClick={this.handleClick} />
            <Button label={"."} handleClick={this.handleClick} />
            <Button label={"/"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"7"} handleClick={this.handleClick} />
            <Button label={"8"} handleClick={this.handleClick} />
            <Button label={"9"} handleClick={this.handleClick} />
            <Button label={"*"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"4"} handleClick={this.handleClick} />
            <Button label={"5"} handleClick={this.handleClick} />
            <Button label={"6"} handleClick={this.handleClick} />
            <Button label={"-"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"1"} handleClick={this.handleClick} />
            <Button label={"2"} handleClick={this.handleClick} />
            <Button label={"3"} handleClick={this.handleClick} />
            <Button label={"+"} handleClick={this.handleClick} />
          </div>
          <div className="button-row">
            <Button label={"0"} handleClick={this.handleClick} />
            <Button label={"="} handleClick={this.handleClick} />
          </div>
        </div>
      </div>
    );
  }
}
export default App;
