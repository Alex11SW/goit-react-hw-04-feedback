import { useState } from "react";
import styles from "./vote.module.css";
import FeedbackOptions from "../FeedbackOptions/FeedbackOptions";
import Statistics from "../Statistics/Statistics";
import Section from "../Section/Section";
import Notification from "../Notification/Notification";

const Vote = () => {
  const [votes, setVotes] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const countTotalFeedback = () => {
    return votes.good + votes.neutral + votes.bad;
  };
  const countPositiveFeedbackPercentage = (keyName) => {
    const total = countTotalFeedback();
    if (!total) {
      return 0;
    }
    const value = votes[keyName];
    return Number((value / total) * 100).toFixed(0);
  };
  const leaveVote = (keyName) => {
    setVotes((prevVotes) => ({
      ...prevVotes,
      [keyName]: prevVotes[keyName] + 1,
    }));
  };
  const total = countTotalFeedback();
  const positivePercentage = countPositiveFeedbackPercentage("good");
  return (
    <div className={styles.wrapper}>
      <Section title="Please leave feedback">
        <FeedbackOptions
          options={Object.keys(votes)}
          onLeaveFeedback={leaveVote}
        />
      </Section>
      {total > 0 ? (
        <Section title="Statistics" isStatistics>
          <Statistics
            total={total}
            good={votes.good}
            neutral={votes.neutral}
            bad={votes.bad}
            positivePercentage={positivePercentage}
          />
        </Section>
      ) : (
        <Notification message="No feedback given" />
      )}
    </div>
  );
};

export default Vote;
