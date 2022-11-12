import React, { Component } from 'react';
import Statistics from './FeedBack/Statistics/Statistics';
import FeedbackOptions from './FeedBack/FeedbackOptions/FeedbackOptions';
import Notification from './FeedBack/Notification/Notification';
import Section from './FeedBack/Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onClickButton = evt => {
    this.setState(prevState => {
      return {
        [evt.target.name]: prevState[evt.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };

  countPositiveFeedbackPercentage = () => {
    return Math.trunc(
      (this.state.good * 100) /
        (this.state.good + this.state.neutral + this.state.bad)
    );
  };

  render() {
    const keys = Object.keys(this.state);
    const total = this.countTotalFeedback();
    return (
      <>
        <Section>
          <h2>Please leave feedback</h2>
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={this.onClickButton}
          />
        </Section>

        <Section>
          <h2>Statistics</h2>
          {total > 0 ? (
            <Statistics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="No feedback given" />
          )}
        </Section>
      </>
    );
  }
}

export default App;
