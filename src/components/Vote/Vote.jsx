import { Component } from "react";
import styles from "./vote.module.css";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

class Vote extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }
  countPositiveFeedbackPercentage(keyName) {
    const total = this.countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = this.state[keyName];
    return Number((value / total) * 100).toFixed(0);
  }
  leaveVote = (keyName) => {
    this.setState((prevState) => {
      return {
        [keyName]: prevState[keyName] + 1,
      };
    });
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage("good");
    return (
      <div className={styles.wrapper}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={Object.keys(this.state)}
            onLeaveFeedback={this.leaveVote}
          />
        </Section>
        {total > 0 ? (
          <Section title="Statistics" isStatistics>
            <Statistics
              total={total}
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Notification message="No feedback given" />
        )}
      </div>
    );
  }
}
export default Vote;
