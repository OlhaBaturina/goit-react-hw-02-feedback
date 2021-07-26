import React, { Component } from "react";
import Feedback from "./Components/Feedback/index";
import s from "./App.css";
import Statistics from "./Components/Statistics/Statistics";

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
    return (
      <div className={s.thumb}>
        <h2 className={s.name}>Please leave feedback</h2>
        <Feedback
          onGoodFeedback={this.onGoodFeedback}
          onNeutralFeedback={this.onNeutralFeedback}
          onBadFeedback={this.onBadFeedback}
        />
        <h2 className={s.name}>Statistics</h2>
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          positiveFeedback={this.countPositiveFeedbackPercentage}
          totalFeedback={this.countTotalFeedback}
        />
      </div>
    );
  }
}

export default App;
