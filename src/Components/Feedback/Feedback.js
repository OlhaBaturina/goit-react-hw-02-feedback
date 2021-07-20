import React, { Component } from "react";
import "./Feedback.module.css";

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    // total: 0,
    // positive: 0,
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

  countTotalFeedback = (good, neutral, bad) => {
    const total = good + neutral + bad;
    return total;
  };

  countPositiveFeedbackPercentage = (total, good) => {
    const positive = Math.round((100 / total) * good);
    return positive;
  };

  render() {
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback(good, neutral, bad);
    const positive = this.countPositiveFeedbackPercentage(total, good);

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
          <p className="statistics">Good: {good}</p>
          <p className="statistics">Neutral: {neutral}</p>
          <p className="statistics">Bad: {bad}</p>
          <p className="statistics total">Total: {total}</p>
          <p className="statistics positive">
            Positive feedback: {positive || 0}%
          </p>
        </div>
      </div>
    );
  }
}

export default Feedback;
