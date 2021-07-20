import React, { Component } from "react";
import "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
  };

  onGoodFeedback = () => {
    this.setState((prevState) => {
      return { good: prevState.good + 1 };
    });
  };

  onNeutralFeedback = () => {
    this.setState((prevState) => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  onBadFeedback = () => {
    this.setState((prevState) => {
      return { bad: prevState.bad + 1 };
    });
  };

  //   total =(prevState)=> {
  //    return {total: this.state.good + this.state.neutral + this.state.bad};
  //   }

  render() {
    const { good, neutral, bad } = this.state;

    return (
      <div className="thumb">
        <h2 className="name">Please leave feedback</h2>
        <div className="feedback_thumb">
          <button className="feedback" onClick={this.onGoodFeedback}>
            Good
          </button>
          <button className="feedback" onClick={this.onNeutralFeedback}>
            Neutral
          </button>
          <button className="feedback" onClick={this.onBadFeedback}>
            Bad
          </button>
        </div>
        <h2 className="name">Statistics</h2>
        <div className="statistics_thumb">
          <p className="statistics">Good: {this.state.good}</p>
          <p className="statistics">Neutral: {this.state.neutral}</p>
          <p className="statistics">Bad: {this.state.bad}</p>
          <p className="statistics">
            Total: {this.state.good + this.state.neutral + this.state.bad}
          </p>
          <p className="statistics">
            Positive feedback:{" "}
            {Math.round(
              (100 / (this.state.good + this.state.neutral + this.state.bad)) *
                this.state.good
            )}
            %
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
